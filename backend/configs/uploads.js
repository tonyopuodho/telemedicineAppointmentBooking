import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (request,file,cb) => {
        cb(null,'public/images')
    },
    filename: (request,file,cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage
})
