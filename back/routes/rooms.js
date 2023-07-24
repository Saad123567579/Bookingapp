const express = require('express');
const router = express.Router();
const {getAllRooms,getRoom,createRoom,deleteRoom,updateRoom} = require("../controller/rooms");
router.get('/getroom',getRoom);
router.get('/getallrooms',getAllRooms);
router.post('/createroom/:hotelId',createRoom);
router.put('/updateroom/:id',updateRoom);
router.delete('/createroom/:hotelId/:id',deleteRoom);






module.exports = router ;
// export default router;