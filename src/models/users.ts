import mongoose from 'mongoose'

const Schema = mongoose.Schema

interface IUser {
    name: String;
    surname: String;
    position: String;
    adress_id:String;
  }

const Users = new Schema<IUser>({
    name:{ type: String},
    surname: { type: String},
    position: String,
    adress_id:String,
},{timestamps:true})

const UserModel = mongoose.model('User', Users);
export default UserModel