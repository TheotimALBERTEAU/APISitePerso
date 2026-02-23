const express = require('express');
const router = express.Router();

const Education = require("../models/EducationModel");

router.get("/", async (req, res) => {
    try {
        const education = await Education.find();

        res.status(200).json({
            code: 200,
            message: "Education recovered successfully",
            data: education,
        })
    } catch (error) {
        console.error('Error occurred while getting education', error);

        res.status(500).json({
            code: 500,
            message: "Impossible to get education due to a server error",
            details: error.message,
            data: null
        })
    }
});

module.exports = router;