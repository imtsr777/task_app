import {Request,Response,NextFunction} from 'express'
import mongoose from '../utils/mongoose'
import UserModel from '../models/users'
import AdressModel from '../models/adress'

const ADD = async(req:Request,res:Response,next:NextFunction)=>{

    try{
        const { name,surname,position,adress_id }:{name:String,surname:String,position:String,adress_id:String } = req.body
        
        mongoose().catch(err => res.status(400).json({
            message:err.message
        }))

        let newUser:Object = await UserModel.create ({
            name,
            surname,
            position,
            adress_id,
        })

        res.json({
            message:"Succesfuly added"
        })

    }
    catch(error){
        res.json({error})
    }
} 

const GET = async(req:Request,res:Response,next:NextFunction)=>{
    const word:Array<String> = req.body.word.split(" ")

    mongoose().catch(err => res.status(400).json({
        message:err.message
    }))
    
    let search1 = await UserModel.aggregate([
        {
            $lookup:{
                from:"adresses",
                localField:"adress_id",
                foreignField:"adress_id",
                as:"adress"
            },
        },
        {
            $match:{
                name:{
                    $regex:'.*' + word[0] + '.*',
                    $options:'i'
                },
                surname:{
                    $regex:'.*' + word[1] + '.*',
                    $options:'i'
                },
                position:{
                    $regex:'.*' + word[2] + '.*',
                    $options:'i'
                }
            }
        }
    ])

    let search2 = await UserModel.aggregate([
        {
            $lookup:{
                from:"adresses",
                localField:"adress_id",
                foreignField:"adress_id",
                as:"adress"
            },
        },
        {
            $match:{
                name:{
                    $regex:'.*' + word[2] + '.*',
                    $options:'i'
                },
                surname:{
                    $regex:'.*' + word[1] + '.*',
                    $options:'i'
                },
                position:{
                    $regex:'.*' + word[0] + '.*',
                    $options:'i'
                }
            }
        }
    ])

    let search3 = await UserModel.aggregate([
        {
            $lookup:{
                from:"adresses",
                localField:"adress_id",
                foreignField:"adress_id",
                as:"adress"
            },
        },
        {
            $match:{
                name:{
                    $regex:'.*' + word[0] + '.*',
                    $options:'i'
                },
                surname:{
                    $regex:'.*' + word[2] + '.*',
                    $options:'i'
                },
                position:{
                    $regex:'.*' + word[1] + '.*',
                    $options:'i'
                }
            }
        }
    ])
    let newArray:Array<Object> = [...search1,...search2,...search3] 
    
    res.json(newArray)

}


export default {
    ADD,
    GET
}