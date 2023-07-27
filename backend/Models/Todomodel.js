const mongoose = require("mongoose")
const schema = mongoose.Schema


const TodoSchema = new schema({
    text: {
        type: String,
        required: true
    },
    completed:{
        type:Boolean,
        default: false
    },
    timestamp:{
        type:Date,
        default: Date.now
    }
})

const TodoModel = mongoose.model("Todo Model",TodoSchema)

module.exports = TodoModel