const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
        validate: [arrLimit, `{PATH} cannot be empty`]
    }
})

function arrLimit(val) {
    return val.length > 0;
}

module.exports = mongoose.model("Blogs", blogSchema)