const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
  mongoose.Promise = global.Promise;
  //cliente
  mongoose.connect('mongodb://localhost:27017/Clientes', {
    useMongoClient: true
  });
  //producto
  mongoose.connect('mongodb://localhost:27017/Productos', {
    useMongoClient: true
  });

  //clinte
  wagner.factory('db', () => mongoose);
  const Cliente = require('./cliente.model');
  
  //producto
  wagner.factory('db', () => mongoose);
  const Producto = require('./producto.model');

  const models = {
    Cliente,
    Producto

  };

  _.each(models, (v, k) => {
    wagner.factory(k, () => v);
  });
}