const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    },

    wheels: {
        type: Number,
        enum: ["2", '4']
    },

    vehicletype: {
        car: {
            type: String,
            enum: ["hatchback", "suv", "sedan"]
        },
        bike: {
            type: String,
            enum: ["cruiser", "sports"]
        }
    },

    model: {
        car:{
            type: String,
        },
        bike:{
            type: String
        }
    },

    dates: {
        type:String
    }

})


module.exports = mongoose.model('rentalDatas', dataSchema);