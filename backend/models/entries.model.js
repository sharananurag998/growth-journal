const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entriesSchema = new Schema({
    username: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    tags: { type: Array, required: false }
},{
    timestamps: true,
});

const Entries = mongoose.model('Entries', entriesSchema);

module.exports = Entries;