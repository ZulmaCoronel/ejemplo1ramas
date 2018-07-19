const mongoose = require('mongoose');
const _ = require('underscore');

module.exports = (wagner) => {
  mongoose.Promise = global.Promise;
  
    mongoose.connect('mongodb://localhost:27017/noticias', {
    useMongoClient: true
  });

  wagner.factory('db', () => mongoose);
  const Noticias = require('./noticias.model');

  const models = {
    Noticias
  };

  _.each(models, (v, k) => {
    wagner.factory(k, () => v);
  });
}