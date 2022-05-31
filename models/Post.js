const { model, Schema, Types } = require("mongoose");

const postSchema = new Schema({
    text: {type: String, required: true},
    author: {type: Types.ObjectId, required: true},
    likes: {type: [Types.ObjectId], required: true}
});

module.exports = model('Post', postSchema);