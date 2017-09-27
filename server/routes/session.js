import Router from 'koa-router'
const router = new Router({prefix: '/auth'})

router.post('/login', async function (ctx) {
  console.log(ctx)
  ctx.body = {success: true}
})

export default router
