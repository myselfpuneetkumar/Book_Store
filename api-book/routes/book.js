const express = require('express')
const bodyParser = require('body-parser')
const bookcontroller = require('../controllers/bookcontroller')
const multer = require("multer");
const route = express.Router()
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));
const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 },
});
route.post('/add/book',  uploader.single("file"),(req, res)=> {
    bookcontroller.addBook(req, res);
})
route.get('/books', (req, res)=> {
    bookcontroller.getBooks(req, res);
})
route.get('/get/book/:id',(req, res)=> {
    bookcontroller.getBookForEdit(req, res);
})
route.put('/edit/book/:id', (req, res)=> {
   bookcontroller.updateBook(req, res);
})
route.delete('/delete/book/:id', (req, res)=> {
    bookcontroller.delteBook(req, res)
})
module.exports = route