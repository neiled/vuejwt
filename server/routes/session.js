import Router from 'koa-router'
const router = new Router({prefix: '/auth'})
import UserController from '../controllers/UserActionController'
const userController = new UserController()

router.post('/login', async function (ctx) {
  await userController.authenticate(ctx)
})

router.get('/test', async function (ctx) {
  console.log('test api')
  console.log(ctx.state.user)
  ctx.body = 'test api ok'
})

export default router
