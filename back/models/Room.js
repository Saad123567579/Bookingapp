const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
    hotel: {type:Number},
    title: { type: String, required: true },
    price: { type: Number, required: true },
    maxPeople: { type:Number, required: true },
    description: { type: String, required: true },
    roomNumbers: [{number:{type:Number},unavailableDates:{type:[Date]}}]

    
});


const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
;