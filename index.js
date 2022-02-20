const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const testVal = process.env.TEST_VAL

app.get('/', (req, res) => {
    res.send(`TEST_VAL: ${testVal || 'not defined'}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})