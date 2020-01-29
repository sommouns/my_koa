module.exports = async (ctx, next) => {
    const start = Date.now()
    await next()
    const end = Date.now()
    console.log('request ' + ctx.url + ', using ' + parseInt(end - start) + 'ms')
}