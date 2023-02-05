const mongoose=require('mongoose');

const connect =()=>{
    return mongoose.connect('mongodb+srv://pummySh:Xui3T8TloukXsfAo@cluster0.s66sp8x.mongodb.net/test');
}

module.exports =connect;