import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const gifSchema = new Schema({
  category: { type: String, required: true },
}, {
  timestamps: true,
});

const Gif = mongoose.model('Gif', gifSchema);

export default Gif;