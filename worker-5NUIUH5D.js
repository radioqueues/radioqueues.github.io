async function*a(i,e){if(e.kind==="file"){let l=await e.getFile();if(l!==null){let t=await i.resolve(e);l.relativePath=t.join("/"),yield l}}else if(e.kind==="directory")for await(let l of e.values())yield*a(i,l)}async function n(i,e){let l={},t=await a(i,e);for await(let s of t)l[s.relativePath]={size:s.size,lastModified:s.lastModified};return l}addEventListener("message",async({data:i})=>{if(i.cmd=="getFilesRecursively"){let e=await n(i.rootHandle,i.handle);postMessage({cmd:"getFilesRecursively",result:e})}});
