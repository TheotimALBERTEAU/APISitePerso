const mongoose = require("mongoose");

const SkillsDetailsSchema = new mongoose.Schema({
    subtitle: {
        type: String,
        required: true,
        trim: true
    },
    percent: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    logoPath: {
        type: String,

    }
},  {
    _id: false
});

const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    skills: [SkillsDetailsSchema]
},  {
    timestamps: true
})

module.exports = mongoose.model('Skill', SkillSchema);
