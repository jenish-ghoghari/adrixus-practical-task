const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    register_date: {
        type: Date,
    }
})

UserSchema.pre('save', function (next) {
    const newUser = this
    bcrypt.hash(newUser.password, 10, function (err, result) {
        if (err) {
            return next(err)
        } else {
            newUser.password = result
            next()
        }
    })
})

UserSchema.methods.comparePass = function (Password, cb) {
    bcrypt.compare(Password, this.password, function (err, match) {
        if (err) {
            return cb(err)
        } else {
            return cb(null, match)
        }
    })
}

var user = mongoose.model('user', UserSchema);
module.exports = user;