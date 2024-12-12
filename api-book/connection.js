const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/book-store-batch-A')
        console.log("databas connected successfully")
    } catch(err) {
        console.log(err)
    }
}
module.exports = connect;