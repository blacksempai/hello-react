const { model, Schema, Types } = require('mongoose');

const profileSchema = new Schema({
    birthDate: {type: Date},
    city: {type: String},
    education: {type: String},
    site: {type: String},
    posts: {type: [{type: Types.ObjectId, ref: 'Post'}], required: true }
});

module.exports = model('Profile', profileSchema)