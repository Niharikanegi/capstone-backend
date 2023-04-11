var express = require('express');
var transController = require('../controller/transController')
var router = express.Router();


router.post(`/add-transaction`, function (req, res) { 
    transController.insertTrans(req, res)
    
})
router.post(`/get-all-transactions`, function (req, res) { 
  transController.getTrans(req, res)
    
})
router.post(`/delete-transaction`, function (req, res) { 
    transController.deleteTrans(req, res)
      
  })
  router.post(`/edit-transaction`, function (req, res) { 
    transController.addTrans(req, res)
      
  })

module.exports = router;