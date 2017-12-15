var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useMongoClient: true }, function(err) {
    if (err) throw err;
    else console.log('mongo setup');
});