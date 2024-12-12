const Book = require('../models/Book');
const cloudinary = require("cloudinary").v2;
async function addBook(req, res) {
    try {
        console.log(req.body, 'req.body')
        console.log("---------------------------")
        console.log(req.file, 'req.body')
        cloudinary.config({
            cloud_name: "dtnj3vjad",
            api_key: "836243925894637",
            api_secret: "z0rnS46iWj8QmEKtGeux95BLEpo",
            
        });
        const upload = await cloudinary.uploader.upload(req.file.path);
        req.body.bookImage = upload.secure_url;
        let book = new Book(req.body);
        await book.save();
        res.status(200).send({ success: true });
    } catch(err) {
        console.log(err, 'err');
        res.status(500).send({ success: false });
    }
}
async function getBooks(req, res) {
    try {
        console.log(req.query, 'req.query....')
        let books = await  Book.find({ bookName: new RegExp(req.query.search, "i")})
        res.status(200).send({ success: true, data: books });
    } catch(err) {
        console.log(err);
        res.status(400).send({ success: false, message: 'Something went wrong' });
    }
}
async function getBookForEdit(req, res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({ _id: id });
        res.status(200).send({ success: true, data: book })
    } catch(err) {
        console.log(err)
        res.status(400).send({ success: false, data: '' , messgae: 'Something Went wrong..' })
    }
}
async function updateBook(req, res) {
    try {
        let id = req.params.id
        let book = await Book.findOne({ _id: id });
        console.log(book, 'book')
        console.log("-----------------------------")
        console.log(req.body, 'req.body')
        book.bookName = req.body.bookName;
        book.authorName = req.body.authorName;
        book.description = req.body.description;
        book.publisherName = req.body.publisherName;
        book.price = req.body.price;
        book.language = req.body.language;
        await book.save();
        res.status(200).send({ success: true });
    } catch(err) {
        console.log(err)
        res.status(400).send({ success: false });
    }
}
async function delteBook(req, res) {
    try {
        let id = req.params.id;
        await Book.deleteOne({ _id: id });
        res.status(200).send({ success: true })
    } catch(err) {
        console.log(err)
    }
}
module.exports = {
    addBook,
    getBooks,
    getBookForEdit,
    updateBook,
    delteBook
}