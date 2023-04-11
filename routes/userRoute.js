var express = require('express');
var userController = require('../controller/userController')
var router = express.Router();


router.post(`/register`, function (req, res) { 
    userController.registerUser(req, res)
    
})
router.post(`/login`, function (req, res) { 
  userController.loginUser(req, res)
    
})


module.exports = router;