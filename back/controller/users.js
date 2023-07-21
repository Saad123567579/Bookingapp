const User = require("../models/User");
const jwt = require('jsonwebtoken');
exports.verifyToken = async(req,res,next) => {
    let token = req.cookies.token;
    if(!token){ return res.status(404).json("Token not found");}
    jwt.verify(token,process.env.JWT,(error,user)=>{
        if(error) { return res.status(404).json("Invalid Token");}
        req.id = user.id;
        req.isAdmin = user.isAdmin;
        next();
    });
    
}

exports.verifyUser = async(req,res,next) => {
    let id = req.id;
    if(req.isAdmin){next()}
    let user = await User.findById(id);
    if(!user) {return res.status(404).json("Could not find user");}
    next();

}

exports.getAllUsers = async(req,res) => {
    try{
        let users = await User.find();
    return res.status(200).json(users);
} catch(error) { return res.status(500).json("Internal server error");}
    }

exports.getUserById = async(req,res) => {
   try{
    let id = req.params.id;
    let user = await User.findById(id);
    if(!user) { return res.status(400).json("No user found");}
    return res.status(200).json(user);
   } catch(error){ return res.status(500).json("Internal server error");}

}    

exports.updateUserById = async(req,res) => {
    try{
        let id = req.params.id;
        let updateUser = await  User.findByIdAndUpdate(id,{$set:req.body})
        if(!updateUser) {return res.status(404).json("Could not update user");}
        return res.status(200).json("User successfully updated");

    } catch(error) {return res.status(500).json("Internal server erro");}

}

exports.deleteUserById = async(req,res) => {
    try{
        let id = req.params.id;
        let deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser) {return res.status(404).json("Could not delete user");}
        return res.status(200).json("User deleted");
    } catch(error) { return res.status(500).json("Internal server error");}
}
