const mongoose = require('mongoose');

const connect = async () => {
    try{
        await mongoose.connect(`mongodb+srv://user:user123@auth.r6pmayt.mongodb.net/?retryWrites=true&w=majority&appName=auth`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected!");
    }
    catch(e){
        console.log(e);
    }
}

module.exports = connect;