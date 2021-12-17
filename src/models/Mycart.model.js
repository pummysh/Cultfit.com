const mongoose=require('mongoose');

const mycartSchema=new mongoose.Schema({
    name:{type :String},
    brand:{type :String,required:false,default:"CULTSPORT"},
    price:{type:Number,required:true},
    mainPrice:{type:Number},
    discount:{type :String,required:false},
    size:[{type:String, required:false},],
    categary:{type:String,required:false},
    quantity:{tpye:Number},
    img:[{type:String, required:false}],
})

module.exports = mongoose.model("mycart",mycartSchema);
