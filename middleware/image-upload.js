const multer = require('multer')


const imageStorage = multer.diskStorage({
    destination: 'images', 
    filename: (req, file, cb) => {
        const imageFilename = Date.now() + '_' + file.originalname
        req.image = imageFilename
        cb(null, imageFilename )
        // file.fieldname is name of the field (image), path.extname get the uploaded file extension
    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 5000000   // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {     // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})  

module.exports = imageUpload