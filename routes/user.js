const express = require('express');
const controllers = require('../controller');


const router = express.Router();

router.post('/', controllers.userController.createUser);
router.get('/', controllers.userController.getUsers);
router.get('/:id', controllers.userController.getOneUser);
router.put('/:id', controllers.userController.updateUser);
router.delete('/:id', controllers.userController.deleteUser);

module.exports = router;