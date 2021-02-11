const express = require('express')
const router = express.Router()
const Project = require('../model/project')

router.get('/', async (req, res) => {
    res.json(await Project.find({}))
})

router.get('/:id', async (req, res) => {
    res.json(await Project.find({ _id: req.params.id }))
})

router.post('/', async (req, res) => {
    res.json(await Project.create(req.body))
})

router.put('/:id', async (req, res) => {
    res.json(
        await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    )
})

router.delete('/:id', async (req, res) => {
    res.json(await Project.findByIdAndDelete(req.params.id))
})

module.exports = router