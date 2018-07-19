const mongoose = require('mongoose');

let clienteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const clienteModel = mongoose.model('ClienteSchema', clienteSchema, 'cliente');



module.exports = clienteModel;