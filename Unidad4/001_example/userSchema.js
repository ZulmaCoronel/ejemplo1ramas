var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        match: /.+@.+\..+/,
        lowercarse: true
    },
    password:{
        type: String,
        require: true
    }
});