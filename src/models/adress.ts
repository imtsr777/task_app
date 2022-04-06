import mongoose from 'mongoose'

const Schema = mongoose.Schema

interface IAdress {
    adress: string,
    adress_id:string
  }

const Adress = new Schema<IAdress>({
    adress_id: {type: String},
    adress: { type: String}
},{timestamps:true})

const AdressModel = mongoose.model('Adress', Adress);
export default AdressModel