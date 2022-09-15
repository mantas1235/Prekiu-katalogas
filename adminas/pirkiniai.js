import mongoose from "mongoose";




const Schema = mongoose.Schema

const PirkiniuSchema = new Schema ({
    preke: String,
    name: String,
    surname: String,
    address: String,
    phone: String,
    email: String,
})


const Pirkiniai = mongoose.model('Pirkiniai', PirkiniuSchema)

export default Pirkiniai