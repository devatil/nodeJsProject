import mongoose from "mongoose";

const { Schema } = mongoose;

const photeSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    uploadDate: { type: Date, default: Date.now },


})

const Photo = mongoose.model("Photo", photeSchema);

export default Photo;