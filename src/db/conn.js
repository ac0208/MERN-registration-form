/*In this file I have linked the mongodb port number and the url where the mongoose will connect and send the data to get added on the
database*/
const mongoose = require("mongoose");

        mongoose.connect("mongodb://localhost:27017/userRegistration", {
        }).then(() => {
            console.log(`connection successful`);
        }).catch((e) => {
            console.log(`connection failed`)
        })

