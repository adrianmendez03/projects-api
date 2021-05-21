const { Schema, model } = require('mongoose')

const projectSchema = new Schema({
    name: { type: String, required: true },
    frontend: { type: String, required: true },
    server: { type: String, required: false },
    database: { type: String, required: false },
    image: { type: String, required: true },
    description: { type: String, required: true },
    repo: { type: String, required: true },
    demo: { type: String, required: true }
})

const Project = model('Project', projectSchema)

module.exports = Project