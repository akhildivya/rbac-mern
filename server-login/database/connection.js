const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Mongo db atlas connected");

}).catch(err => {
    console.log(`Atlas not connected ${err}`);

})