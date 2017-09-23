import Router from 'koa-router'
const router = new Router({prefix: '/example'})

router.get('/', async function (ctx, next) {
  ctx.body = {'example'}
})

