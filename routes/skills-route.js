const express = require("express");
const router = express.Router();

const Skill = require("../models/SkillModel");

router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find();

        res.status(200).json({
            code: 200,
            message: "Skills list recovered successfully",
            data: skills
        })
    } catch (error) {
        console.error('Error occurred while getting skills', error);

        res.status(500).json({
            code: 500,
            message: "Impossible to get skills due to a server error",
            details: error.message,
            data: null
        })
    }
})

module.exports = router;
