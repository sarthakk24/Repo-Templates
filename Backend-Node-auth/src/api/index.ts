import { Router } from 'express'
import healthCheckRoute from './healthcheck'
import authRoutes from './auth/routes'

export default (): Router => {
    const app = Router()
    //TODO: add routes here...
    app.use('/health', healthCheckRoute)
    app.use('/auth', authRoutes)
    return app
}
