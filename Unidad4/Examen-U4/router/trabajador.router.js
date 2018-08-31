const router = require('express').Router();

module.exports = (wagner) => {

    const userCtrl = wagner.invoke((Trabajador) =>
        require('../controllers/trabajador.controller')(Trabajador));

    router.get('/', (req, res) =>
        userCtrl.getAll(req, res));
    
    router.get('/:id', (req, res) =>
        userCtrl.getById(req, res));
    
    router.post('/', (req, res) =>
        userCtrl.createUser(req, res));
    

    return router;
}