const express = require('express');
const router = express.Router();
const {verifyToken,verifyUser,getUserById,getAllUsers,updateUserById,deleteUserById} = require("../controller/users");


router.get('/getusers',verifyToken,verifyUser,getAllUsers);
router.get('/getuserbyid/:id',verifyToken,verifyUser,getUserById);
router.put('/updateuserbyid/:id',verifyToken,verifyUser,updateUserById);
router.delete('/deleteuserbyid',verifyToken,verifyUser,deleteUserById);






module.exports = router ;