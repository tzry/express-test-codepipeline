const express = require('express')
const app = express()
const port = 80
const testVal = process.env.TEST_VAL

app.get('/', (req, res) => {
    res.send(`TEST_VAL: ${testVal || 'not defined'}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})