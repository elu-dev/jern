const router = require('express').Router()
const fs = require('fs')

const DB = './db.json'

router.get('/', (req,res) => {
    fs.readFile(DB, (err, raw) => {
        res.json(JSON.parse(raw))
    })
})

router.post('/', (req,res) => {
    fs.readFile(DB, (err, raw) => {
        data = JSON.parse(raw)
        data.push(req.body)
        fs.writeFile(DB, JSON.stringify(data), err => res.sendStatus(200))
    })
})

router.delete('/:id', (req,res) => {
    fs.readFile(DB, (err, raw) => {
        data = JSON.parse(raw)
        data = [...data.filter(todo => todo.id != req.params.id)]
        fs.writeFile(DB, JSON.stringify(data), err => res.sendStatus(200))
    })
})

router.put('/:id', (req,res) => {
    fs.readFile(DB, (err, raw) => {
        data = JSON.parse(raw)
        data = data.map(todo => todo.id == req.body.id ? req.body : todo)
        fs.writeFile(DB, JSON.stringify(data), err => res.sendStatus(200))
    })
})

module.exports = router