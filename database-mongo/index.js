const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    creatorName: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    eventName: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    cost: {
        type: Number,
        required: [true, 'Name Field is Required']
    },
    des: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    url: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    date: {
        type: String,
        required: [true, 'Name Field is Required']
    },
    availableSeats: {
        type: Number,
        required: [true, 'Name Field is Required']

    },
    eventLocation: {
        type: Array,
        required: [true, 'Name Field is Required']
    },
    attending: {
        type: Array
    },
    userId: {
        type: String
    }
});

var Event = mongoose.model('Event', EventSchema);



// let save = (data ,cb) => {
//        console.log('hhhhh',data[0].Name)
//     let student = new Student({Name:data[0].Name,HomeWork:data[0].HomeWork});
//     student.save();
// }


// var selectAll = function(callback) {
//   Student.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
// module.exports.save=save;
module.exports = Event;
