const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newsModel = new Schema(
    {
        title: {
            type: String
        },
        image:{
            type: String
        },
        content:{
            type:String
        },
        reporter:{
            type:String
        },
        reptime: {
            type:String,
            default: Date.now()
        }
    },
    {
        collection: 'news'    
    }
);

module.exports = mongoose.model('NewsModel',newsModel);