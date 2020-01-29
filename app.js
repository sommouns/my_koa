const SKoa = require('./s-koa')
const app = new SKoa()
const Router = new (require('./router'))()
Router.get('/index', async ctx => {
    ctx.body = 'index'
})
Router.get('/list', async ctx => {
    ctx.body = 'list'
})
app.use(require('./logger'))
app.use(require('./interceptor'))
app.use(require('./static')())
function sleep () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}
app.use(async (ctx, next) => {
    await sleep()
    next()
})

app.use((ctx, next) => {
    console.log(123)
    next()
})
app.use(Router.routes())
app.listen(3000, () => {
    console.log('server running at localhost:3000')
})