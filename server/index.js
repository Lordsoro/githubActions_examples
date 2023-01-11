const express = require('express');
const app = express();

const port = 5000

app.get('/', (req, res) => {
    console.log('funciona')
})

app.listen(() => {
    console.log(`Server running on port: ${port}`)
})