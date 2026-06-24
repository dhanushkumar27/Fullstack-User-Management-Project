require("dotenv").config()

require("./database/db")

const express = require('express')
const cors = require('cors')

const userRoutes = require("./routes/userRoutes.js")


const app = express()

app.use(cors())
app.use(express.json())
app.use(userRoutes) 

app.get('/', (request, response) => {
    response.send('User Management Backend Running')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

