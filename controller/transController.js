var getTransData = require('../services/transServices.js') 


const insertTrans = async (req, res) => {  
    let transaction = await getTransData.insertTrans(req, res)
   
}
const getTrans = async (req, res) => {  
    let transaction = await getTransData.fetchTrans(req, res)
  
}
const deleteTrans = async (req, res) => {  
    let transaction = await getTransData.deleteTrans(req, res)
  
}

const addTrans = async (req, res) => {  
    let transaction = await getTransData.addTrans(req, res)
  
}
module.exports = {
    insertTrans, getTrans, deleteTrans, addTrans
}
