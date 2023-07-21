const express = require('express');
// const router = express.Router();
const { createHotel,updateHotel,getallHotel,deleteHotel,verifyToken,verifyUser } = require("../controller/hotels");
const router = express.Router();

// Define the route for creating a hotel using GET method
router.post('/createhotel',verifyToken,verifyUser, createHotel);
router.put('/updatehotel/:id',verifyToken,verifyUser, updateHotel);
router.get('/getallhotel', getallHotel);
router.delete('/deletehotel/:id',verifyToken,verifyUser, deleteHotel);


module.exports = router;