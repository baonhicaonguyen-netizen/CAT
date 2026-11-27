// Core words keep their original identity: they determine lesson streaks and room unlocks.
const key = text => text.normalize('NFKC').trim();
export function mergeCourse(base, custom) {
  const lessons = [...new Map([...base, ...custom].map(l => [l.id, l])).values()].sort((a,b) => a.id-b.id);
  const seen = new Set(lessons.flatMap(l => l.words.map(w => key(w.zh))));
  const fresh = w => {const k = key(w.zh); if (seen.has(k)) return false; seen.add(k); return true;};
  return lessons.map(l => {
    if (!l.supplements && !l.strokeTerms) return l;
    const supplements = (l.supplements || []).map(g => ({...g, words:g.words.filter(fresh)})).filter(g => g.words.length);
    return {...l, supplements, strokeTerms:(l.strokeTerms || []).filter(fresh)};
  });
}

export function wordSections(l) {
  const sections = [{id:'core',label:'Từ trong bài',groups:[{topic:'',words:l.words}],count:l.words.length}];
  if (l.supplements?.length) sections.push({id:'extra',label:'Từ bổ sung',groups:l.supplements,count:l.supplements.reduce((n,g)=>n+g.words.length,0)});
  if (l.strokeTerms?.length) sections.push({id:'strokes',label:'Tên nét cơ bản',groups:[{topic:'',words:l.strokeTerms}],count:l.strokeTerms.length});
  return sections;
}

export function cueFor(l, target, position) {
  if (!l) return null;
  const words = wordSections(l).flatMap(section => section.groups.flatMap(g => g.words));
  const exact = words.find(w => w.zh === target);
  if (exact) return {word:exact, position:position+1};
  const c = [...target].filter(x=>/\p{Script=Han}/u.test(x))[position];
  if (!c) return null;
  const word = words.find(w=>w.zh===c) || words.find(w=>w.zh.includes(c));
  return word ? {word, position:[...word.zh].indexOf(c)+1} : null;
}

const fold = s => s.toLowerCase().normalize('NFD').replace(/\p{M}/gu,'').replace(/đ/g,'d').replace(/[\s'’·-]/gu,'');
const withV = s => fold(s.toLowerCase().normalize('NFD').replace(/u\u0308|u:/g,'v'));
export function vocabularyIndex(course) {
  return course.flatMap(l => wordSections(l).flatMap(section => section.groups.flatMap(g => g.words.map(w => ({
    l, section:section.id, w, han:key(w.zh), py:fold(w.py), pyV:withV(w.py), vi:fold(w.vi)
  })))));
}
export function findWords(index, query) {
  const raw=key(query), q=fold(raw), v=withV(raw);
  if(!q) return [];
  const results=[];
  for(const e of index) {
    let rank=e.han===raw?0:e.han.startsWith(raw)?1:e.han.includes(raw)?2:
      e.py===q||e.pyV===v||e.vi===q?3:e.py.startsWith(q)||e.pyV.startsWith(v)||e.vi.startsWith(q)?4:
      e.py.includes(q)||e.pyV.includes(v)||e.vi.includes(q)?5:-1;
    if(rank>=0) results.push({e,rank});
  }
  return results.sort((a,b)=>a.rank-b.rank).map(result=>result.e);
}
