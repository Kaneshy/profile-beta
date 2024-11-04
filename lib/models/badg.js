import mongoose from 'mongoose';

const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const BadgeGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  badgets: [BadgeSchema], // Make sure 'badgets' is intentional and not a typo for 'badges'
});

// Avoid overwriting the model if it already exists
const BadgeGroup = mongoose.models.BadgeGroup || mongoose.model('BadgeGroup', BadgeGroupSchema);

export default BadgeGroup;