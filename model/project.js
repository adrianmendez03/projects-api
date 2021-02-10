const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
    name: { type: String, required: true },
    tech: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    repo: { type: String, required: true },
    demo: { type: String, required: true }
})

const Project = model('Project', projectSchema)

module.exports = Project