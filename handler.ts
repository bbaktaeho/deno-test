import { ServerRequest } from "https://deno.land/std@v0.42.0/http/server.ts";
export default (req: ServerRequest) => {
    return req.url;
}