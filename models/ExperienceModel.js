const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    }, // Format "2022 - Present"
    highlights: {
        type: [String],
        default: []
    }, // Tableau de chaînes pour tes puces
    technologies: {
        type: [String],
        default: []
    } // Tableau pour tes badges
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema)