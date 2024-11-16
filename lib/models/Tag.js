import mongoose from 'mongoose';

const TagsSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    desc: {
        type: String,
    },
    urlIg: {
        type: String,
    },
    privacy: {
        type: String,
    }
}, { timestamps: true });

// Check if the model is already defined to avoid re-defining it
const Tags = mongoose.models && mongoose.models.Tags
    ? mongoose.models.Tags
    : mongoose.model('Tags', TagsSchema);

export default Tags;