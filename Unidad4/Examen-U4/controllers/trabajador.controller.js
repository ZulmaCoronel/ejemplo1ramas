const status = require('http-status');
const config = require('../_config');
const handler = require('../utils/handler');
const http = require('http');
const async = require('async');

var qr = require('qr-image');
var express = require('express');
var router = express.Router();

var fs = require('fs');
const path = require('path');
// var async = require('async');

let _trabajador;

const getAll = (req, res) => {
    _trabajador.find({})
        .sort({})
        .exec(handler.handleMany.bind(null, 'trabajadores', res));
};

const getById = (req, res) => {
   // const id = req.params.id;

    const {id} = req.params; //destructor

    //console.log(id.toString().legth);

    if(id.toString().length!=24){
        res.status(400);
        res.json({err:"Identificador inválido"});
    }else{
    _trabajador.find({_id: id})
        .sort({})
        .exec(handler.handleOne.bind(null, 'user', res));
}
};


const createUser = (req, res) => {
    const trabajador = req.body;

    _trabajador.create(trabajador)
        .then(
            (data) => {
                res.status(200);
                res.json({msg:"Usuario creado correctamente", data:data});
            }
        )
        .catch(
            (err) =>{
                res.status(400);
                res.json({msg:"Algo va mal!!", data:err});
            }
        )
};
 

module.exports = (Trabajador) => {
    _trabajador = Trabajador;
    return ({
        getAll,
        getById,
        createUser
    });
}