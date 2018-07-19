const status = require('http-status');
const config = require('../_config');
const http = require('http');
const async = require('async');
var qr = require('qr-image');
var fs = require('fs');
const path = require('path');

let _cliente;

const getAll = (req, res) => {
    _cliente.find({})
        .sort({})
       .exec((error ,doc)=>{
           if(error){
               res.json({error:"Error"});
               res.status(400);
           }
           else{
               res.json({doc});
           }
       })
};

const getById = (req, res) => { 
    const id = req.params.id;

    if(id.toString().length != 24){
        res.status(400);
        res.json({err: "Identificador No valido"});
    }
    else{
    _cliente.find({_id:id})   
        .sort({})
        .exec((error ,doc)=>{
            if(error){
                res.json({error:"Error"});
                res.status(400);
            }
            else{
                res.json({doc});
            }
        })  
    }
};
const deleteById = (req, res) => { 
     const id = req.params.id;

     _cliente.remove({_id:id}, (err,data)=>{
        if(err){
            res.status(400); 
            res.json({msg:"No se pudo realizar la operacion"})
        } else{
            res.status(200);
            res.json({msg:"El cliente se elimino correctamente"});
        }
     }); 

 };

 const createCliente = (req, res) => { 
    const cliente = req.body;

    _cliente.create(cliente)
        .then(   
            (data)=>{
                res.status(200);
                res.json({msg:"Cliente creado correctamente",data:data});
            }
        )
        .catch( 
            (err)=>{
                res.status(400);
                res.json({msg:"Algo va mal!!!",data:err});
            }
        )

};

const updateById = (req, res) => { 
    const id = req.params.id;
    const newData = req.body;

    const query = {_id:id};
     
    _cliente.findOneAndUpdate(query, newData, (err,data)=>{
        if(err){
            res.status(400); 
            res.json({msg:"No se pudo realizar la operacion, Vuelva intentar"})
        } else{
            res.status(200);
            res.json({msg:"El cliente se actualizo correctamente "});
       }
    }); 

};

module.exports = (Cliente) => {
    _cliente = Cliente;
    return ({
        getAll,
        getById,
        deleteById,
        createCliente,
        updateById

    });
} 