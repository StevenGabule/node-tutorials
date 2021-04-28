const multer = require('multer')

const excelFiler = (req, file, cb) => {
    if (
        file.mimetype.includes('excel') ||
        file.mimetype.includes('spreadsheetml')
    ) {
        cb(null, true)
    } else {
        cb("Please upload only excel file", false)
    }
}

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/resources/static/assets/uploads/')
    },
    filename: (req, file, cb) => {
        console.log(file.originalname)
        cb(null, `${Date.now()}-sma-${file.originalname}`)
    }
});

let uploadFile = multer({storage: storage, fileFilter: excelFiler});
module.exports = uploadFile
