var mongoose = require("mongoose");
var userSchema = require('./userSchema');

//conexion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/alumnos', {useMongoClient:true});

//modelo
var User = mongoose.model('User', userSchema, "user2");

//Documento en RAM
var user = new User({
    name:"Israe",
    email: "iarjona@ittepic.edu.mx",
    password:12345
});

//Documento en MongoDB
user.save((error, data)=>{
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado"+data);
    process.exit(0);
});