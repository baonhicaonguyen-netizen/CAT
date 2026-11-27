import {BREEDS,KITTEN,roomOf} from './house-model.js';

export const WAIT_MS=86400000, MAX_EXTRA_KITTENS=5;
const defaultPair=['miso','luna'];
export function normalizeFamily(raw,house,starters=defaultPair){
 const family={born:raw?.born===true||Boolean(house?.cats.some(c=>c.id===KITTEN.id)),due:0,litters:{}};
 if(!family.born&&Number.isSafeInteger(raw?.due)&&raw.due>0)family.due=raw.due;
 for(const male of BREEDS.filter(c=>c.sex==='♂'))for(const female of BREEDS.filter(c=>c.sex==='♀')){
  if(male.id===starters[0]&&female.id===starters[1])continue;
  const id='kitten-'+male.id+'-'+female.id,record=raw?.litters?.[id];
  if(house?.cats.some(c=>c.id===id)||record?.born===true)family.litters[id]={born:true,due:0};
  else if(Number.isSafeInteger(record?.due)&&record.due>0)family.litters[id]={born:false,due:record.due};
 }
 return family;
}
export function pairId(starters,male,female){
 return male===starters[0]&&female===starters[1]?KITTEN.id:'kitten-'+male+'-'+female;
}
export function recordsFor(family,starters){
 return [{id:KITTEN.id,parents:starters,born:family.born,due:family.due},...Object.entries(family.litters||{}).map(([id,r])=>({...r,id,parents:id.split('-').slice(1)}))];
}
export function pairProblems({family,starters,cats,owned,male,female}){
 if(!BREEDS.some(c=>c.id===male&&c.sex==='♂')||!BREEDS.some(c=>c.id===female&&c.sex==='♀'))return ['Chọn một mèo đực và một mèo cái trưởng thành.'];
 const pair=[male,female].map(id=>cats.find(c=>c.id===id));
 if(pair.some(c=>!c))return ['Cả hai mèo phải đang sống trong nhà.'];
 const id=pairId(starters,male,female),entries=recordsFor(family,starters),current=entries.find(r=>r.id===id),reasons=[];
 if(current?.born||current?.due||cats.some(c=>c.id===id))return ['Cặp này đã có mèo con hoặc đang chờ đón bé.'];
 if(id!==KITTEN.id&&Object.keys(family.litters||{}).length>=MAX_EXTRA_KITTENS)reasons.push('Nhà đã đủ chỗ cho 5 bé cùng với suất riêng của Mochi.');
 if(entries.some(r=>!r.born&&r.due&&r.parents.some(p=>p===male||p===female)))reasons.push('Một trong hai mèo đang chờ đón bé với cặp khác.');
 if(!owned('nursery')||!owned('bed'))reasons.push('Cần Góc cho mèo con và Hai ổ mèo lớn.');
 if(pair.some(c=>roomOf(c.room)?.type==='isolation'||roomOf(c.home)?.type==='isolation'))reasons.push('Mèo đang cách ly chưa thể ghép cặp.');
 if(id!==KITTEN.id&&pair[0].home!==pair[1].home)reasons.push('Chuyển hai mèo về cùng một phòng trưởng thành trong mục Phòng mèo.');
 if(id!==KITTEN.id&&pair[0].home===pair[1].home&&roomOf(pair[0].home)?.type!=='adult')reasons.push('Cặp mới cần ở chung một phòng trưởng thành.');
 for(const c of pair)if(c.food<65||c.water<65||c.bond<50)reasons.push(BREEDS.find(d=>d.id===c.id).name+' cần no và đủ nước ≥65%, thân thiết ≥50%.');
 return reasons;
}
export function schedulePair(options,now=Date.now()){
 const problems=pairProblems(options);
 if(problems.length)return problems;
 const {family,starters,male,female}=options,id=pairId(starters,male,female);
 if(id===KITTEN.id)family.due=now+WAIT_MS;
 else (family.litters??={})[id]={born:false,due:now+WAIT_MS};
 return [];
}
