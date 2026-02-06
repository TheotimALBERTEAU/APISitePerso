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
});

router.get("/categories", async (req, res) => {
    try {
        const categories = await Project.distinct("category");

        res.status(200).json({
            code: 200,
            message: "Categories list recovered successfully",
            data: categories
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Server error",
            details: error.message
        })
    }
});

router.get("/:category", async (req, res) => {
    try {
        const categoryRequested = req.params.category;

        const projects = await Project.find({ category: categoryRequested });
        res.status(200).json({
            code: 200,
            message: `Projects list from category ${categoryRequested} recovered successfully`,
            data: projects
        })
    } catch (error) {
        console.error(`Error occurred while getting projects for category: ${req.params.category}`, error);

        res.status(500).json({
            code: 500,
            message: "Server error",
            details: error.message
        });
    }
})

module.exports = router;