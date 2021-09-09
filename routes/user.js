const express = require('express');
const controllers = require('../controller');
const {check, param} = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware');
const controller = require('../controller');



const router = express.Router();

router.post('/',
    [
        check('name', "Empty value").notEmpty(),
        check('login', "Login password must be more than 6 characters and less than 15").isLength({min: 6, max: 15}),
        check('password', "Password must be more than 6 characters and less than 15").isLength({min: 6, max: 15})
    ],
    controllers.userController.createUser.bind(controllers.userController));

router.get('/', authMiddleware, controllers.userController.getUsers.bind(controllers.userController));

router.get('/:id',
  param('id').notEmpty().isLength({min:24}),                                  //TODO debug
  authMiddleware, controllers.userController.getOneUser.bind(controllers.userController));

router.put('/:id',  controllers.userController.updateUser.bind(controllers.userController));

router.delete('/:id', authMiddleware, controllers.userController.deleteUser.bind(controllers.userController));


router.post('/registration',
    [
        check('name', "Empty value").notEmpty(),
        check('login', "Login password must be more than 6 characters and less than 15").isLength({min: 6, max: 15}),
        check('password', "Password must be more than 6 characters and less than 15").isLength({min: 6, max: 15})
    ],
    controllers.userController.registrationUser.bind(controllers.userController));

router.post('/auth', controllers.userController.authUser.bind(controllers.userController))

router.post('/auth/refresh', controller.userController.refreshToken.bind(controllers.userController))


module.exports = router;
