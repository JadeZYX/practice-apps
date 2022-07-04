var controller = require('./controllers.js');
var router = require('express').Router();

//handler GET,POST, DELETE methods with corresponding routes
router.get('/words', controller.getAll);

router.get('/search', controller.search);

router.post('/words', controller.post);

router.delete('/words',controller.delete);

router.put('/words',controller.update);

module.exports = router;