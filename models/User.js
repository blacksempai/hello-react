const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    photoURL: {type: String},
    sex: {type: String, enum : ['M','W'], required: true },
    profile: {type: Types.ObjectId, ref: 'Profile', required: true }
});

module.exports = model('User', userSchema);