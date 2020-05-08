import handler from './handler.ts'

import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

console.log(Deno.args);
// if (Deno.args.length !== 1) {
//     throw new Error('need a handler!')
// }

for await (const req of s) {
    
    if (req.url === "/") 
        req.respond({
            body: handler(req)
        })
    else
        req.respond({})

//   req.respond({ body: `Hello World\n${req.url}` });
}