const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
  mongoose.Promise = global.Promise;
  //mongoose.connect('mongodb://localhost:27017/ittjornada'
    //mongoose.connect('mongodb://localhost:27017/alumnos',{
   //mongoose.connect('mongodb://localhost:27017/noticias', {
     mongoose.connect('mongodb://localhost:27017/trabajadores',{
    useMongoClient: true
  });
  wagner.factory('db', () => mongoose);
  const Trabajador = require('./trabajador.model');

  const models = {
    Trabajador
  };

  _.each(models, (v, k) => {
    wagner.factory(k, () => v);
  });
}