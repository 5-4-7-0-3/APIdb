const express = require('express');
const controllers = require('../controller');


const router = express.Router();

router.post('/', controllers.userController.createUser.bind(controllers.userController));
router.get('/', controllers.userController.getUsers.bind(controllers.userController));
router.get('/:id', controllers.userController.getOneUser.bind(controllers.userController));
router.put('/:id', controllers.userController.updateUser.bind(controllers.userController));
router.delete('/:id', controllers.userController.deleteUser.bind(controllers.userController));

router.post('/auth', controllers.userController.authUser.bind(controllers.userController))




module.exports = router;