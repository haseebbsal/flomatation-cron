const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    locationId: {
        type: String,
        required: true
    }
})

let userModel = mongoose.model('users', userSchema)

module.exports=userModel