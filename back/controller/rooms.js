const Room = require("../models/Room");
const Hotel = require("../models/Hotel");


exports.createRoom = async (req, res) => {
  let room = new Room(req.body);
  let hotelId = req.params.hotelId;

  try {
    let saveRoom = await room.save();
    if (!saveRoom) {
      return res.status(404).json("Unable to save room");
    }
    let saveroom = await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: saveRoom._id },
    });
    if (!saveroom) {
      return res.status(404).json("Unable to save room");
    }

    return res.status(200).json("Room successfully saved");
  } catch (error) {
    return res.status(500).json("Internal Serve Error");
  }
};

exports.getRoom = async (req, res) => {
  try {
    let rooms = await Room.findById(req.params.id);
    if (!rooms) {
      return res.status(404).json("could not get rooms");
    }
    return res.status(200).json(rooms);
  } catch (error) {
    return res.stats(500).json("Internal server error");
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    let rooms = await Room.find();
    if (!rooms) {
      return res.status(404).json("could not get rooms");
    }
    return res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

exports.deleteRoom = async (req, res) => {
  let hotelId = req.params.hotelId;
  try {
    let deleteROOM = await Room.findByIdAndDelete(req.params.id);
    if (!deleteROOM) {
      return res.status(404).json("Unable to delete room");
    }

    let deleteroom = await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: req.params.id },
    });
    if (!deleteroom) {
      return res.status(404).json("Unable to delete room");
    }

    return res.status(200).json("Room successfully deleted");
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};

exports.updateRoom = async (req, res) => {
  try {
    let updateRoom = await Room.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    if (!updateRoom) {
      return res.status(404).json("Could not update room");
    }
    return res.status(200).json("Room successfully updated");
  } catch (error) {
    return res.status(500).json("Internal server error");
  }
};
