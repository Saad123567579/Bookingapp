const express = require('express');
// const router = express.Router();
const { createHotel,updateHotel,getallHotel,deleteHotel } = require("../controller/hotels");
const router = express.Router();

// Define the route for creating a hotel using GET method
router.post('/createhotel', createHotel);
router.put('/updatehotel/:id', updateHotel);
router.get('/getallhotel', getallHotel);
router.delete('/deletehotel/:id', deleteHotel);


module.exports = router;