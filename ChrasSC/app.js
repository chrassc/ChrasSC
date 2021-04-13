var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://192.168.0.3:27017";

MongoClient.connect(url, function(err,db){
    if (err) throw err;
    console.log("Database created.");
    db.close();
});




//db name 