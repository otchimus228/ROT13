const express = require('express')

const app = express()

app.use(express.static('temp'))
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/temp/index.html')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Сервер был запущен: http://localhost:${PORT}`)
})