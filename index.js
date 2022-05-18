import express from 'express'
import cors from 'cors'

import router from './routes/router'

const app = express()

const bodyParser = require('body-parser')

app.use(express.json())

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)

const port = 5000
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))