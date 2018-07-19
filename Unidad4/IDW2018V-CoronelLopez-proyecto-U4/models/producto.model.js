const mongoose = require('mongoose');

let productoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    }
});

const productoModel = mongoose.model('ProductoSchema', productoSchema, 'producto');



module.exports = productoModel;