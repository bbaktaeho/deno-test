import {Application} from 'https://deno.land/x/oak/mod.ts'

const app = new Application()

app.use(async (ctx: any)=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json = await data.json()

    ctx.response.body = json
})

await app.listen({port: 9000})