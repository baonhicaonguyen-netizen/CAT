// Calendar days are always Vietnam time, independent of the device timezone.
export const vnDay=(now=Date.now())=>Math.floor((now+7*3600000)/86400000);
export const lessonChars=l=>[...new Set(l.words.flatMap(w=>[...w.zh]).filter(c=>/\p{Script=Han}/u.test(c)))].sort();
export const lessonKey=l=>l.id+':'+lessonChars(l).join('');
export function normalizeProgress(s){
 s.lessonStudy=s.lessonStudy&&typeof s.lessonStudy==='object'&&!Array.isArray(s.lessonStudy)?s.lessonStudy:{};
 s.masteredLessons=s.masteredLessons&&typeof s.masteredLessons==='object'&&!Array.isArray(s.masteredLessons)?s.masteredLessons:{};
 for(const [id,v]of Object.entries(s.masteredLessons))if(!/^\d+$/.test(id)||!Number.isSafeInteger(v))delete s.masteredLessons[id];
 for(const [key,v]of Object.entries(s.lessonStudy)){if(!v||typeof v!=='object'||!v.days||typeof v.days!=='object'){delete s.lessonStudy[key];continue}for(const [day,chars]of Object.entries(v.days))if(!/^\d+$/.test(day)||!Array.isArray(chars)||chars.some(c=>typeof c!=='string'||!/^\p{Script=Han}$/u.test(c)))delete v.days[day];}
 s.currentRoom=Number.isSafeInteger(s.currentRoom)?Math.max(0,Math.min(s.currentRoom,roomCount(s)-1)):0;
 return s;
}
export const masteredCount=s=>Object.keys(s.masteredLessons||{}).length;
export const roomCount=s=>1+Math.floor(masteredCount(s)/10);
export function lessonProgress(s,l,now=Date.now()){
 const chars=lessonChars(l),today=vnDay(now),entry=s.lessonStudy?.[lessonKey(l)],days=entry?.days||{};
 const done=d=>chars.length>0&&chars.every(c=>days[d]?.includes(c));
 let end=done(today)?today:today-1,streak=0;while(streak<3&&done(end-streak))streak++;
 const completed=Number.isSafeInteger(entry?.certifiedDay);
 return {streak,completed,todayDone:done(today),todayCount:chars.filter(c=>days[today]?.includes(c)).length,total:chars.length,remaining:chars.filter(c=>!days[today]?.includes(c)),dates:[today-2,today-1,today].map(day=>({day,done:done(day)}))};
}
export function recordLessonChar(s,l,ch,success,now=Date.now()){
 normalizeProgress(s);const before=roomCount(s);if(!success||!lessonChars(l).includes(ch))return {newRoom:false,newDay:false};
 const wasDone=lessonProgress(s,l,now).todayDone,day=vnDay(now),key=lessonKey(l),entry=s.lessonStudy[key]??={days:{}};
 entry.days[day]=[...new Set([...(entry.days[day]||[]),ch])];
 for(const d of Object.keys(entry.days))if(+d<day-3)delete entry.days[d];
 const p=lessonProgress(s,l,now);if(p.streak>=3){s.masteredLessons[l.id]??=day;entry.certifiedDay??=day;}
 return {newRoom:roomCount(s)>before,newDay:!wasDone&&p.todayDone,...p};
}
export const roomName=i=>['Phòng khởi đầu','Phòng nắng ấm','Phòng vườn xanh','Phòng trăng dịu'][i]||'Phòng bình yên '+(i+1);
export const roomScale=i=>1+Math.min(i,5)*.16;
