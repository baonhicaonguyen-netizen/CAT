import {unpack} from './packed-assets.js';
const three=await (async()=>{
 const blob=await (await unpack('./assets/three.gz.b64')).blob();
 const url=URL.createObjectURL(new Blob([blob],{type:'text/javascript'}));
 try{return await import(url)}finally{URL.revokeObjectURL(url)}
})();
export default three;
