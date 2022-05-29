const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    birthDate: {type: Date},
    city: {type: String},
    education: {type: String},
    site: {type: String},
    photoURL: {type: String},
    sex: {type: String, enum : ['M','W'], required: true }
});

module.exports = model('User', userSchema);