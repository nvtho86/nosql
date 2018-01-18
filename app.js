var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoping";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

MongoClient.connect(url, function (err, db) {
  if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
  } 
else 
{
      //HURRAY!! We are connected.
      console.log('Connection established to', url);

      // Get the documents collection
      var collection = db.collection('restaurant');

      // Find some state
      collection.find({}).toArray
      (

          function (err, result) {
              if (err) {
                  console.log(err);
              } else if (result.length) {
                // console.log(result);
                //var result=result.length;
                result.forEach(function(element) {
                    console.log(element.address.building);
                    console.log(element.address);
                }, this);

              } else {
                  console.log('No document(s) found with defined "find" criteria!');
              }
              //Close connection
              db.close();
          }

      );
  }
});