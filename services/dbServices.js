const userModel = require("../models/User.js"); 



async function registerUser (req, res) {
    try {
      const newuser = new userModel(req.body);
      await newuser.save();
      res.send('User Registered Successfully')
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  async function loginUser (req, res) {
    try {
      const result = await userModel.findOne({
        email: req.body.email,
        password: req.body.password,
      });
  
      if (result) {
        res.send(result);
      } else {
        res.status(500).json("Error");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  module.exports = {
    registerUser,loginUser
}