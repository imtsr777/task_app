import {Request,Response,NextFunction} from 'express'
import mongoose from '../utils/mongoose'
import AdressModel from '../models/adress'
import {v4 as uuidv4 } from 'uuid'

const ADD = async(req:Request,res:Response,next:NextFunction)=>{



    try{
        const { adress }:{ adress:String } = req.body
        let adress_id:String = uuidv4()
        
        mongoose().catch(err => res.status(400).json({
            message:err.message
        }))

        let newAdress = await AdressModel.create ({
            adress_id,
            adress
        })

        res.json({
            message:"Succesfuly added"
        })

    }
    catch(error){
        res.json({error})
    }
} 



export default {
    ADD
}