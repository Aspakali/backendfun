require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('skbikiali')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Apna youtube chanel</h2>')
})

app.get('/insta', (req, res) => {
    res.send("<h1>Please visit my instagram page !</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})