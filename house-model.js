export const ROOMS=[
 {id:'entry',name:'Sảnh hai cửa',area:4,size:'2 × 2 m',type:'entry',cap:0,unlock:0,note:'Cửa ngoài và cửa trong liên động: chỉ mở một cửa mỗi lần.'},
 {id:'store',name:'Kho & chuẩn bị',area:6,size:'2 × 3 m',type:'store',cap:0,unlock:0,note:'Kệ thức ăn, cát, khăn và bồn rửa. Vật tư chăm sóc được dùng từ kho.'},
 {id:'adultA',name:'Trưởng thành A',area:16,size:'4 × 4 m',type:'adult',cap:5,unlock:0,note:'Nhóm hòa hợp. Ổ ngủ, kệ ba tầng, hai trụ cào và cửa sổ có lưới.'},
 {id:'adultB',name:'Trưởng thành B',area:14,size:'3,5 × 4 m',type:'adult',cap:5,unlock:10,note:'Nhóm năng động. Vách che tầm nhìn và hốc trốn riêng.'},
 {id:'mother1',name:'Mèo mẹ 1',area:6,size:'2 × 3 m',type:'mother',cap:1,unlock:20,note:'Ổ thấp có mái che; bát và khay riêng đặt ở hai góc xa ổ.'},
 {id:'mother2',name:'Mèo mẹ 2',area:6,size:'2 × 3 m',type:'mother',cap:1,unlock:30,note:'Phòng yên tĩnh độc lập. Không tự cho mèo khác đi vào.'},
 {id:'nursery',name:'Mèo con',area:10,size:'2,5 × 4 m',type:'nursery',cap:6,unlock:40,note:'Các bé tập đi, tập ăn và chơi ở đây. Đồ chơi mềm, ổ thấp, khay mini và nền chống trượt.'},
 {id:'iso1',name:'Cách ly 1',area:7,size:'≈ 2,3 × 3 m',type:'isolation',cap:1,unlock:50,note:'Nori mới đến. Bát, khay và dụng cụ riêng; không tự đi sang phòng khác.'},
 {id:'iso2',name:'Cách ly 2',area:6,size:'2 × 3 m',type:'isolation',cap:1,unlock:60,note:'Phòng dự phòng / dưỡng sức. Việc chuyển mèo ra cần xác nhận của bạn.'},
 {id:'dining',name:'Ăn & uống',area:8,size:'2 × 4 m',type:'dining',cap:12,unlock:0,note:'12 bát ăn và 4 bát nước. Mọi bát đều đổ, kéo và sử dụng được.'},
 {id:'litterA',name:'Vệ sinh A',area:4,size:'2 × 2 m',type:'litter',cap:5,unlock:0,note:'4 khay cát. Tách khỏi phòng ngủ và khu ăn.'},
 {id:'litterB',name:'Vệ sinh B',area:4,size:'2 × 2 m',type:'litter',cap:5,unlock:70,note:'4 khay cát cho nhóm B, có khe thoáng riêng.'},
 {id:'hall',name:'Hành lang chăm sóc',area:8,size:'Diện tích bổ sung',type:'hall',cap:10,unlock:0,note:'Lối tiếp cận các phòng, không phải đi xuyên phòng mèo mẹ hoặc cách ly.'},
 {id:'catio',name:'Sân lưới',area:14,size:'≈ 3,5 × 4 m',type:'catio',cap:10,unlock:80,note:'Lưới bao kín, mái che, cầu leo và bục tắm nắng.'}
];
export const BREEDS=[
 {id:'miso',name:'Miso',sex:'♂',breed:'Maine Coon',color:'#ce8a49',cream:'#f6ddae',eye:'#b8a957',pattern:'red',size:1.15,long:true,home:'adultA',personality:'Hiếu động · thích leo',speed:1.4},
 {id:'luna',name:'Luna',sex:'♀',breed:'British Shorthair',color:'#8c9da9',cream:'#bec8cb',eye:'#d4ad54',pattern:'blue',size:.96,home:'adultA',personality:'Điềm tĩnh · thích chải má',speed:.85},
 {id:'may',name:'Mây',sex:'♀',breed:'Ragdoll',color:'#e4e3df',cream:'#faf4e6',eye:'#70b5e4',pattern:'bicolor',size:1.03,long:true,home:'mother1',personality:'Dịu dàng · thích nằm gần',speed:.85},
 {id:'ho',name:'Hổ',sex:'♂',breed:'Bengal',color:'#b88a4c',cream:'#e7c797',eye:'#87a864',pattern:'spots',size:1,home:'adultB',personality:'Tò mò · mê săn đồ chơi',speed:1.6},
 {id:'nori',name:'Nori',sex:'♂',breed:'Bombay',color:'#262a30',cream:'#363941',eye:'#dba44d',pattern:'black',size:.93,home:'iso1',personality:'Thân thiện · cần làm quen',speed:1,guest:true},
 {id:'tuyet',name:'Tuyết',sex:'♀',breed:'Turkish Angora',color:'#f3f1e9',cream:'#fff9ed',eye:'#81b6ca',pattern:'white',size:.92,long:true,home:'mother2',personality:'Nhẹ nhàng · thích chỗ cao',speed:1.1},
 {id:'que',name:'Quế',sex:'♂',breed:'Abyssinian',color:'#a85f39',cream:'#d3a071',eye:'#b4ad54',pattern:'ticked',size:.9,home:'adultB',personality:'Lanh lợi · thích khám phá',speed:1.5},
 {id:'miki',name:'Miki',sex:'♀',breed:'Japanese Bobtail',color:'#f1eadf',cream:'#fff6e7',eye:'#c4b568',pattern:'calico',size:.85,home:'adultA',personality:'Hoạt bát · đuôi cộc',speed:1.25},
 {id:'bac',name:'Bạc',sex:'♂',breed:'American Shorthair',color:'#b1b8bf',cream:'#e0e1df',eye:'#a3b577',pattern:'silver',size:.98,home:'adultA',personality:'Thân thiện · thích bóng',speed:1.1},
 {id:'lam',name:'Lam',sex:'♀',breed:'Siamese',color:'#d9c4a0',cream:'#eee0c4',eye:'#5eaddd',pattern:'point',size:.86,home:'adultB',personality:'Quấn người · hay gọi',speed:1.3}
];
export const KITTEN={id:'mochi',name:'Mochi',sex:'♀',breed:'Mèo con',color:'#e5c29c',cream:'#f8e7cb',eye:'#8aafbb',pattern:'kitten',size:.48,long:false,home:'nursery',personality:'Tập đi · thích bóng mềm',speed:.7,kitten:true};
const catDefs=new Map([...BREEDS,KITTEN].map(d=>[d.id,d]));
export function catDefinition(id){
 if(catDefs.has(id))return catDefs.get(id);
 if(typeof id!=='string'||!/^kitten-[a-z]+-[a-z]+$/.test(id))return;
 const [,father,mother]=id.split('-'),a=catDefs.get(father),b=catDefs.get(mother);
 if(a?.sex!=='♂'||b?.sex!=='♀'||a.kitten||b.kitten)return;
 const coats=(BREEDS.indexOf(a)+BREEDS.indexOf(b))%2;
 const def={...KITTEN,id,name:'Bé '+b.name+'–'+a.name,sex:coats?'♀':'♂',breed:'Mèo con lai',color:(coats?b:a).color,cream:(coats?a:b).cream,pattern:(coats?b:a).pattern,eye:(coats?a:b).eye,parents:[father,mother]};
 catDefs.set(id,def);
 return def;
}
export const clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
const dist=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export function furnitureFor(id){const r=ROOMS.find(x=>x.id===id),bowls=[],trays=[];const bowl=(kind,x,z)=>bowls.push({id:kind+bowls.length,kind,x,z,amount:0,capacity:kind==='food'?20:30});const tray=(x,z)=>trays.push({id:'tray'+trays.length,x,z,waste:0});
 if(r.type==='dining'){for(let i=0;i<12;i++)bowl('food',-2.55+(i%6)*1.02,-1.3+Math.floor(i/6)*1.4);for(let i=0;i<4;i++)bowl('water',-2.1+i*1.4,2.1);}
 if(['mother','nursery','isolation'].includes(r.type)){bowl('food',-2.45,1.85);bowl('water',-.8,1.85);tray(2.7,1.8);if(r.type==='nursery')tray(2.7,.65);}
 if(r.type==='litter')for(let i=0;i<4;i++)tray(-1.9+(i%2)*3.8,-1.3+Math.floor(i/2)*2.6);
 return {bowls,trays,dirt:0};
}
export function newCat(def,i=0){return {id:def.id,room:def.home,home:def.home,x:(i%3-1)*1.4,z:(i%2)*1.2-.7,y:0,yaw:0,food:48+(i*13)%40,water:50+(i*11)%35,clean:76,coat:80,bond:25,energy:85,health:100,wet:0,bladder:0,task:'Quan sát',goal:null,wait:3+i,pet:0,overload:0,annoyed:0,walk:false,play:0,journey:null,stay:0,foodRetry:0,emptyWait:0,outings:0};}
export function newHouse(demo=false,legacy=null,starterIds=['miso','luna']){const starter=starterIds.map(id=>BREEDS.find(c=>c.id===id)).filter(Boolean);const first=demo?[...BREEDS,KITTEN]:(starter.length===2?starter:BREEDS.slice(0,2));const h={version:1,clock:0,selected:first[0].id,room:'adultA',speed:demo?60:1,stock:demo?999:24,cats:first.map(newCat),rooms:Object.fromEntries(ROOMS.map(r=>[r.id,furnitureFor(r.id)])),doors:{outer:false,inner:false},savedAt:Date.now()};if(!demo&&legacy)for(const c of h.cats){const old=legacy[c.id];if(old)for(const k of ['food','water','clean','bond','energy'])if(Number.isFinite(old[k]))c[k]=clamp(old[k]);}return h;}
export function validateHouse(raw,demo=false){if(!raw||raw.version!==1||!Array.isArray(raw.cats)||!raw.rooms)throw Error('Dữ liệu nhà mèo không hợp lệ.');const h=newHouse(demo);for(const k of ['clock','stock'])if(Number.isFinite(raw[k])&&raw[k]>=0)h[k]=raw[k];h.room=ROOMS.some(r=>r.id===raw.room)?raw.room:'adultA';h.selected=String(raw.selected||'miso');h.speed=demo&&[0,1,60,300].includes(raw.speed)?raw.speed:1;h.savedAt=Number.isFinite(raw.savedAt)?raw.savedAt:Date.now();h.cats=[];for(const old of raw.cats){const def=catDefinition(old?.id);if(!def||h.cats.some(c=>c.id===def.id))continue;const c=newCat(def);for(const k of ['food','water','clean','coat','bond','energy','health','wet','bladder'])if(Number.isFinite(old[k]))c[k]=clamp(old[k],0,k==='wet'?1:k==='bladder'?2:100);c.room=ROOMS.some(r=>r.id===old.room)?old.room:def.home;c.home=ROOMS.some(r=>r.id===old.home)?old.home:def.home;c.x=clamp(Number(old.x)||0,-3.1,3.1);c.z=clamp(Number(old.z)||0,-2.5,2.5);h.cats.push(c);}for(const [id,room]of Object.entries(h.rooms)){const old=raw.rooms[id];if(!old)continue;room.dirt=clamp(Number(old.dirt)||0);for(const b of room.bowls){const o=old.bowls?.find(x=>x.id===b.id);if(o){b.amount=clamp(Number(o.amount)||0,0,b.capacity);b.x=clamp(Number(o.x)||0,-3,3);b.z=clamp(Number(o.z)||0,-2.4,2.4)}}for(const t of room.trays){const o=old.trays?.find(x=>x.id===t.id);if(o)t.waste=clamp(Number(o.waste)||0,0,6)}}return h;}
export const defOf=c=>catDefinition(c.id);
export const roomOf=id=>ROOMS.find(r=>r.id===id);
export const smell=r=>clamp(r.dirt*.65+r.trays.reduce((n,t)=>n+t.waste,0)*7);
export function mood(c){if(c.water<15)return 'Très khát · cần nước'.replace('Très','Rất');if(c.food<15)return 'Đói lả · cần ăn';if(c.health<30)return 'Kiệt sức · cần chăm sóc';if(c.annoyed>0)return 'Khó chịu · muốn nghỉ';if(c.wet>.15)return 'Lông ướt · cần khăn';if(c.clean<30)return 'Bẩn · cần lau rửa';if(c.coat<30)return 'Lông rối · cần chải';if(c.pet>0)return 'Thích thú · rừ rừ';return c.task;}
export function pour(h,roomId,id,amount){const b=h.rooms[roomId]?.bowls.find(b=>b.id===id);if(!b||amount<=0)return 0;const n=Math.min(amount,b.capacity-b.amount,b.kind==='food'?h.stock:Infinity);b.amount+=n;if(b.kind==='food')h.stock-=n;return n;}
export function care(h,id,tool,amount=1){const c=h.cats.find(x=>x.id===id);if(!c)return false;if(c.annoyed>0&&tool==='pet')return false;c.goal=null;c.pet=.8;c.walk=false;if(tool==='pet'){c.bond=clamp(c.bond+amount*.3);c.overload+=amount*.25;if(c.overload>8){c.annoyed=8;c.pet=0;c.overload=0;}}if(tool==='brush'){c.coat=clamp(c.coat+amount*1.6);c.bond=clamp(c.bond+amount*.1)}if(tool==='shower'){c.clean=clamp(c.clean+amount*1.4);c.wet=clamp(c.wet+amount*.05,0,1)}if(tool==='towel'){c.clean=clamp(c.clean+amount*.3);c.wet=clamp(c.wet-amount*.09,0,1)}return true;}
export function scoop(h,room,id){const t=h.rooms[room]?.trays.find(t=>t.id===id);if(!t||t.waste<=0)return false;t.waste=Math.max(0,t.waste-1);return true;}
export function wipe(h,room,n){h.rooms[room].dirt=Math.max(0,h.rooms[room].dirt-n);}
export function toggleDoor(h,id){const other=id==='outer'?'inner':'outer';if(!['outer','inner'].includes(id))return false;if(!h.doors[id]&&h.doors[other])return false;h.doors[id]=!h.doors[id];return true;}
export function transfer(h,id,to,released=false){const c=h.cats.find(x=>x.id===id),r=roomOf(to);if(!c||!r||!r.cap)return 'Phòng này không dành để ở.';if(roomOf(c.room).type==='isolation'&&to!==c.room&&!released)return 'Cần xác nhận kết thúc cách ly trước khi chuyển.';const def=defOf(c);if(r.type==='nursery'&&!def.kitten)return 'Phòng này dành riêng cho mèo con.';if(r.type==='mother'&&def.sex!=='♀')return 'Phòng mèo mẹ dành cho mèo cái.';if(h.cats.filter(x=>x.id!==id&&(x.home===to||x.room===to)).length>=r.cap)return 'Phòng đã đủ số chỗ.';c.room=to;c.home=to;c.x=0;c.z=0;c.goal=null;c.journey=null;c.stay=30;c.task='Làm quen phòng mới';return '';}
function decay(h,c,hours){const r=h.rooms[c.room],long=defOf(c).long;const odor=smell(r);c.food=clamp(c.food-hours*5);c.water=clamp(c.water-hours*8);c.clean=clamp(c.clean-hours*(1.2+odor*.07));c.coat=clamp(c.coat-hours*(long?3:1.4));r.dirt=clamp(r.dirt+hours*(.25+(100-c.coat)*.012));c.energy=clamp(c.energy-hours*2);c.bond=clamp(c.bond-hours*.4);c.bladder+=hours*.45;if(c.food<=0||c.water<=0)c.health=clamp(c.health-hours*9);else if(c.food>40&&c.water>40&&c.clean>40)c.health=clamp(c.health+hours*2);}
function toilet(h,c){const room=h.rooms[c.room],tray=room.trays.find(t=>!t.disabled&&t.waste<5);if(tray){tray.waste=Math.min(6,tray.waste+1);c.task='Đào và lấp cát';c.goal={x:tray.x,z:tray.z,kind:'toilet'};}else {room.dirt=clamp(room.dirt+12);c.clean=clamp(c.clean-6);c.task='Khay không dùng được · đi bẩn sàn'}c.bladder=0;c.wait=3;}
function foodBowl(h,c,kind){return h.rooms[c.room].bowls.filter(b=>b.kind===kind&&b.amount>.01&&!h.cats.some(o=>o!==c&&o.room===c.room&&o.goal?.bowl===b.id)).sort((a,b)=>dist(c,a)-dist(c,b))[0];}
function eat(h,c,b,dt){const n=Math.min(b.amount,dt*(b.kind==='food'?1.6:2),(100-c[b.kind])/ (b.kind==='food'?4:3));b.amount=Math.max(0,b.amount-n);c[b.kind]=clamp(c[b.kind]+n*(b.kind==='food'?4:3));c.task=b.kind==='food'?'Đang ăn':'Đang uống nước';}
const privateRoom=r=>['mother','nursery','isolation'].includes(r.type);
function route(c,to){
 if(c.room===to)return;
 c.journey=to;c.goal={kind:'exit',room:c.room==='hall'?to:'hall',x:c.room==='hall'?2.5:0,z:c.room==='hall'?-2:2.5};
 c.task='Đang tới '+roomOf(to).name;
}
function arrive(c){const to=c.goal.room;c.room=to;c.y=0;c.goal=null;c.wait=0;
 if(to==='hall'){c.x=-2.5;c.z=2;c.goal={kind:'exit',room:c.journey,x:2.5,z:-2};c.task='Qua hành lang → '+roomOf(c.journey).name;}
 else{c.x=0;c.z=2.15;c.journey=null;c.stay=to==='catio'?45:to===c.home?25:8;c.emptyWait=0;c.task='Vừa đến '+roomOf(to).name;}
}
export function tickHouse(h,dt,speed=1,env={}){const hours=dt*speed/3600;h.clock+=hours;for(const c of h.cats){decay(h,c,hours);c.pet=Math.max(0,c.pet-dt);c.annoyed=Math.max(0,c.annoyed-dt);c.overload=Math.max(0,c.overload-dt*.3);c.wait-=dt;c.stay=Math.max(0,(c.stay||0)-dt);c.foodRetry=Math.max(0,(c.foodRetry||0)-dt);c.play=Math.max(0,c.play-dt);c.walk=false;const r=roomOf(c.room),room=h.rooms[c.room],allow=id=>env.allowed?.(id)!==false;
 if(c.pet>0){c.task='Được chăm sóc';continue;}
 if(c.goal?.kind==='exit'){if(dist(c,c.goal)<.14){arrive(c);continue;}}
 else if(c.room==='hall')route(c,c.journey||c.home);
 else if(c.bladder>=1){const clean=room.trays.find(t=>!t.disabled&&t.waste<5);if(clean){c.goal={x:clean.x,z:clean.z,kind:'toilet'};if(dist(c,c.goal)<.55){toilet(h,c);continue;}}else if(!privateRoom(r)&&!['litterA','litterB'].includes(c.room)){const dest=c.home==='adultB'&&allow('litterB')?'litterB':'litterA';if(allow(dest)&&h.rooms[dest].trays.length)route(c,dest);else toilet(h,c);}else toilet(h,c);}
 else if(env.toy&&env.toy.room===c.room&&c.energy>10&&c.food>12&&c.water>12){c.goal={x:env.toy.x+(c.id==='miso'?.15:-.15),z:env.toy.z,kind:'play'};c.task='Hào hứng · đuổi lông vũ';c.play=.5;}
 else if((c.foodRetry<=0||foodBowl(h,c,c.water<45?'water':'food'))&&(c.water<45||c.food<50||(c.task==='Đang ăn'&&c.food<90)||(c.task==='Đang uống nước'&&c.water<90))){const kind=c.water<45||(c.task==='Đang uống nước'&&c.water<90)?'water':'food',b=foodBowl(h,c,kind);if(b){c.goal={x:b.x,z:b.z,kind:'eat',bowl:b.id};if(dist(c,b)<.65){c.goal.x=c.x;c.goal.z=c.z;eat(h,c,b,dt);continue;}c.task=kind==='food'?'Tới bát ăn':'Tới bát nước';}
 else if(!privateRoom(r)&&c.room!=='dining'&&allow('dining'))route(c,'dining');else {c.emptyWait=(c.emptyWait||0)+dt;c.task=kind==='food'?'Bát trống · gọi bạn cho ăn':'Bát cạn · gọi bạn rót nước';if(!c.goal||dist(c,c.goal)<.2)c.goal={x:Math.sin(c.emptyWait*.3)*1.8,z:1.2,kind:'walk'};if(c.emptyWait>14){c.foodRetry=50;c.emptyWait=0;if(!privateRoom(r))route(c,allow('catio')&&c.energy>30&&c.health>30?'catio':c.home);else c.wait=0;}}}
 else if(c.wait<=0){c.wait=5+Math.random()*6;const choice=Math.random();if(c.stay<=0&&c.room!==c.home&&!privateRoom(r)&&allow(c.home))route(c,c.home);else if(c.stay<=0&&!privateRoom(r)&&c.room!=='catio'&&allow('catio')&&(choice<.55||c.outings===0)){c.outings=(c.outings||0)+1;route(c,'catio');}else if(choice<.38){c.goal={x:c.room==='catio'?-2.2:-2.35,z:c.room==='catio'?1:-1.65,kind:'bed'};c.task='Tìm ổ ngủ';c.wait=14}else if(choice<.53){c.goal=null;c.task='Tự liếm lông'}else if(choice<.61&&env.has?.('tree')!==false&&r.type==='adult'){c.goal={x:-3.1,z:.3,kind:'scratch'};c.task='Tới trụ cào'}else if(choice<.7&&env.has?.('tree')!==false&&['adult','catio'].includes(r.type)){c.goal={x:2.2,z:-1.5,kind:'climb'};c.task='Leo bục và quan sát'}else{const friend=h.cats.find(x=>x!==c&&x.room===c.room);c.goal=choice>.88&&friend?{x:clamp(friend.x+.7,-3,3),z:friend.z,kind:'greet'}:{x:Math.random()*5-2.5,z:Math.random()*3.5-1.75,kind:'walk'};c.task=choice>.88&&friend?'Tới chào '+defOf(friend).name:'Đi khám phá';if(c.room==='catio'&&friend&&choice>.7){c.goal={x:clamp(friend.x+1,-2.8,2.8),z:clamp(friend.z+.6,-2,2),kind:'play'};c.play=4;c.task='Chạy chơi cùng '+defOf(friend).name;}}}
 if(c.goal?.kind==='bed'&&dist(c,c.goal)<.2)c.task=c.room==='catio'?'Nằm sưởi nắng':'Ngủ cuộn tròn';if(c.goal?.kind==='scratch'&&dist(c,c.goal)<.2)c.task='Cào móng và vươn vai';
 if(['Ngủ cuộn tròn','Nằm sưởi nắng'].includes(c.task))c.energy=clamp(c.energy+dt*.3);if(c.task==='Tự liếm lông'&&c.clean<70&&smell(room)<30)c.clean=Math.min(70,c.clean+dt*.02);
 if(c.goal&&c.goal.kind!=='climb'||c.goal?.kind==='climb'&&dist(c,c.goal)>.2){const dx=c.goal.x-c.x,dz=c.goal.z-c.z,len=Math.hypot(dx,dz);if(len>.13){const step=Math.min(len-.1,dt*defOf(c).speed*(c.play>0?1.5:1)*(c.health<25?.45:1));c.x+=dx/len*step;c.z+=dz/len*step;const yaw=Math.atan2(dx,dz);c.yaw+=Math.atan2(Math.sin(yaw-c.yaw),Math.cos(yaw-c.yaw))*Math.min(1,dt*7);c.walk=true;}}
 c.y=c.goal?.kind==='climb'&&dist(c,c.goal)<.25?Math.min(1.25,c.y+dt*1.2):Math.max(0,c.y-dt*1.5);
 } }
export function advanceHours(h,hours){const count=Math.ceil(Math.max(0,Math.min(72,hours))*4);for(let i=0;i<count;i++){const d=Math.min(.25,hours-i*.25);h.clock+=d;for(const c of h.cats){decay(h,c,d);if(!privateRoom(roomOf(c.room))&&(c.food<50||c.water<45))c.room='dining';for(const kind of ['food','water']){const b=foodBowl(h,c,kind);if(b&&c[kind]<75)eat(h,c,b,10);}if(c.bladder>=1){if(!privateRoom(roomOf(c.room))){const dest=c.home==='adultB'?'litterB':'litterA';if(h.rooms[dest].trays.some(t=>!t.disabled))c.room=dest;}toilet(h,c);}}}}
