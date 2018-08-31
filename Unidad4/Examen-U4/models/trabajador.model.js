const mongoose = require('mongoose');

let trabajadoresSchema = new mongoose.Schema({
  rfc:{
    type: String,
    require: true,
    unique: true,
    uppercase : true
},
apellidos:{
    type: String,
    require: true
},
nombre:{
    type: String,
    require: true
}
});

const trabajadoresModel = mongoose.model('TrabajadoresSchema', trabajadoresSchema, 'trabajadores');

module.exports = trabajadoresModel;