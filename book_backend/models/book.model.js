const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema=new Schema(
    {
        id : Schema.ObjectId,

        title :{
            type:String,
            required:true,
            trim:true
        },

        author:{
            type:String,
            required:true,
        },

        rating : Number,

        genre:{
            type:String,
            required:false,
        },

        availableForExchange: {
            type: Boolean,
            default: true
        },

        location: {
            type: String,
            required: true
        },

        imageUrl: {
            type: String
        },

        postedAt: {
            type: Date,
            default: Date.now
        }

    }
)

module.exports = mongoose.model('Book', bookSchema);