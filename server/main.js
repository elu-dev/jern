const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.use(require('cors')())
// app.use((req,res,next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     next()
// })

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/todos', require('./api.todos'))

app.listen(port, () => console.log(`Server on port ${port}...`))
