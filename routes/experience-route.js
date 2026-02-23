const express = require('express');
const router = express.Router();

const Experience = require('../models/ExperienceModel');

router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.find();

        res.status(200).json({
            code: 200,
            message: "Experiences list recovered successfully",
            data: experiences
        })
    } catch (error) {
        console.error('Error occurred while getting experiences', error);

        res.status(500).json({
            code: 500,
            message: "Impossible to get experiences due to a server error",
            details: error.message,
            data: null
        })
    }
})

module.exports = router;