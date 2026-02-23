const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    highlights: {
        type: [String],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Education', EducationSchema);