const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10; // Recommended number of rounds is 10
const jwt = require('jsonwebtoken');


exports.userSignup = async(req,res) => {
    try{
        const password = await bcrypt.hash(req.body.password, saltRounds);
        let user = new User({...req.body,"password":password});
        let save = await user.save();
        if(!save) {return res.status(404).json("Unable to signup");}
        return res.status(200).json("User successfully created");

    } catch(error) { return res.status(500).json("Internal Server Error");}



}

exports.userLogin = async(req,res) => {
    // try{
        // let password = await bcrypt.compare(plainPassword, hashedPassword)
        let findUser = await User.findOne({"name":req.body.name});
        if(!findUser){return res.status(404).json("Invalid username or password");}
        let compare = await bcrypt.compare(req.body.password,findUser.password);
        if(!compare){return res.status(404).json("Invalid username or password");}
        const token = jwt.sign({id:findUser._id,isAdmin:findUser.isAdmin},process.env.JWT);

        return res.cookie("token",token,{httpOnly:true}).status(200).json("Logging you in");


    // } catch(error) { return res.status(500).json("Internal Server Error")}

}