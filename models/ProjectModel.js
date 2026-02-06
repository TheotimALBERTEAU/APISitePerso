const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['MEAN', 'Python', 'C#', 'MySQL', 'Autre']
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    imgPath: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    sourceCodeUrl: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', ProjectSchema);
