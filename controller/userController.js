
var getUserData = require('../services/dbServices.js') 


const registerUser = async (req, res) => {  
    let user = await getUserData.registerUser(req, res)
   
}
const loginUser = async (req, res) => {  
    let user = await getUserData.loginUser(req, res)
  
}

module.exports = {
    registerUser, loginUser
}



