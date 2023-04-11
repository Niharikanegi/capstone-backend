const transactionModel = require("../models/Transaction.js"); 
const moment = require("moment");



    async function insertTrans(req, res) {
    try {
      const newtransaction = new transactionModel(req.body);
      await newtransaction.save();
      res.send("Transaction Added Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };

//   async function fetchTrans(req, res) {
//     try {
//       const transactions = await transactionModel.find({userid:req.body.userid});
    
//       res.send(transactions);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   };

     async function fetchTrans(req, res) {
    const { frequency, selectedRange , type } = req.body;
    try {
      const transactions = await transactionModel.find({
        ...(frequency !== "custom"
          ? {
              date: {
                $gt: moment().subtract(Number(req.body.frequency), "d").toDate(),
              },
            }
          : {
              date: {
                $gte: selectedRange[0],
                $lte: selectedRange[1],
              },
            }),
        userid: req.body.userid,
        ...(type!=='all' && {type})
      });
  
      res.send(transactions);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  async function deleteTrans(req, res) {
    try {
      await transactionModel.findOneAndDelete({_id : req.body.transactionId})
      res.send("Transaction Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };

  async function addTrans (req, res) {
    try {
      await transactionModel.findOneAndUpdate({_id : req.body.transactionId} , req.body.payload)
      res.send("Transaction Updated Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  };


module.exports = {
    insertTrans, fetchTrans, deleteTrans, addTrans
}