const Koa = require('koa');
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const app = new Koa();
const logger = require('./config/logger')


app.use(router.routes());


app.use(require('koa-bodyparser')());


app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    logger.warn({level:'error', err:'sdsds'})
      ctx.status = 500;
      ctx.body = { error: 'Internal server error' };
    }
});


app.use(async (ctx, next) => {
  ctx.status = 200
  logger.info({method:ctx.method, url:ctx.url})
})

 





module.exports = app;
