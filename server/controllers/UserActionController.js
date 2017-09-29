import jsonwebtoken from 'jsonwebtoken'
import rand from 'randexp'
import dateAddMonths from 'date-fns/add_months'

class UserController {
    constructor() {}

    async authenticate(ctx) {

        let refreshTokenData = {
            username: 'username',
            refreshToken: new rand(/[a-zA-Z0-9_-]{64,64}/).gen(),
            info:
                ctx.userAgent.os +
                ' ' +
                ctx.userAgent.platform +
                ' ' +
                ctx.userAgent.browser,
            ipAddress: ctx.request.ip,
            expiration: dateAddMonths(new Date(), 1),
        }

        const token = jsonwebtoken.sign(
            { data: 'userData' },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME }
        )
        ctx.body = {
            accessToken: token,
            refreshToken: refreshTokenData.refreshToken,
}        
    }
}

export default UserController
