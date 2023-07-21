const express = require('express');
const router = express.Router();
const {verifyToken,verifyUser,getAllRooms,getRoom,createRoom,deleteRoom,updateRoom} = require("../controller/rooms");
router.get('/getroom',getRoom);
router.get('/getallrooms',getAllRooms);
router.post('/createroom/:hotelId',verifyToken,verifyUser,createRoom);
router.put('/updateroom/:id',verifyToken,verifyUser,updateRoom);
router.delete('/createroom/:hotelId/:id',verifyToken,verifyUser,deleteRoom);





module.exports = router ;
// export default router;