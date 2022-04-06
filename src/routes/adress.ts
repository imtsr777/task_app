import {Request,Response,Router} from 'express'
import adress from '../controllers/adress'

const router = Router()

router.post("/add",adress.ADD)

export default {
    router
} 