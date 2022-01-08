import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const gifSchema = new Schema({
  url: { type: String, required: true },
  mood: { type: String, required: true },
});

const Gif = mongoose.model('Gif', gifSchema);

export default Gif;