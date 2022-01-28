const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const imageUpload = require('./middleware/image-upload.js')
const controller = require('./utils/controller.js')
const path = require('path')

const app = express()
const connection = "mongodb://mongo:27017/dna"
const port = 3000

app.use(cors())
app.use('/images', express.static('images'));

app.get('/', function(req, res){ 
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/post', controller.get_all)

app.get('/post/:user', controller.get_post_by_user)

app.post('/post/:user', imageUpload.single('image'), controller.upload_image)

mongoose.connect(connection).then(()=>{
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
})