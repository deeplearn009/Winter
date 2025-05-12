import express from 'express'
import cors from 'cors'
import connectDB from './config/config.js'
import router from './routes/router.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors('*'))

app.use('/', router)

connectDB()

app.listen(6060, () => {
    console.log("Connected")
})