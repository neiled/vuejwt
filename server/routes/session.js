import Router from 'koa-router'
const router = new Router({prefix: '/auth'})
import UserController from '../controllers/UserActionController'
const userController = new UserController()

router.post('/login', async function (ctx) {
  console.log(ctx)
  await userController.authenticate(ctx)
})

export default router
