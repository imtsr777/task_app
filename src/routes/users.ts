import {Request,Response,Router} from 'express'
import users from '../controllers/users'

const router = Router()

router.post("/add",users.ADD)
router.get("/search",users.GET)

export default {
    router
}