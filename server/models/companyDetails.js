import mongoose from "mongoose";
import validator from "validator";
const {isEmail} =validator;

const companyDetailsSchema = mongoose.Schema({
    customerOrCompanyName : {type:String,required:true },
    telephone:{
        type:Number,
        required:true,
        },
    email:{
        type:String,
        required:true,
        unique: true ,
        lowercase:true,
        validate:[isEmail,"Please enter valid email"]           
      },
    address: {
        type:String,
        required: true,
    },
    postCode: {
        type:Number,
        required: true,
    }

})

export default mongoose.model('companyDetailsSchema',companyDetailsSchema);