module.exports = async (ctx, next) => {
    const { res, req } = ctx
    const blackList = ['127.0.0.1']
    const ip = __getClientIP(req)

    if (blackList.includes(ip)) {
        ctx.body = 'not allowed'
    } else {
        await next()
    }
}


function __getClientIP (req) {
    return (
        req.headers['x-forwared-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress
    )
}