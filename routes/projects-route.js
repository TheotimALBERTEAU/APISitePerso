const express = require('express');
const router = express.Router();

const Project = require("../models/ProjectModel");

router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();

        res.status(200).json({
            code: 200,
            message: "Projects list recovered successfully",
            data: projects
        })
    } catch (error) {
        console.error('Error occurred while getting skills', error);

        res.status(500).json({
            code: 500,
            message: "Impossible to get projects due to a server error",
            details: error.message,
            data: null
        })
    }
})

module.exports = router;