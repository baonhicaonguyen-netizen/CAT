export async function unpack(path){
 const response=await fetch(new URL(path,import.meta.url));
 if(!response.ok)throw Error('Không tải được '+path);
 const payload=Uint8Array.from(atob(await response.text()),c=>c.charCodeAt(0));
 return new Response(new Blob([payload]).stream().pipeThrough(new DecompressionStream('gzip')));
}
