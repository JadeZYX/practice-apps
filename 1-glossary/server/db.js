const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary');
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

//define schema
let wordSchema=mongoose.Schema({
  //_id:auto increment
  term:{type:String,unique:true},
  definition:String
});

//define model:model name , collection name plural
let Words=mongoose.model("Words",wordSchema);

/*let wordlist = [
  {term:"Spring", definition:'the season after winter and before summer'},
  {term:'Summer',definition:'he warmest season of the year'},
  {term:"Autumn",definition:'the third season of the year, when crops and fruits are gathered and leaves fall'},
  {term:'Winter',definition:'the coldest season of the year'},
];
*/
//Words.insertMany(wordlist);
module.exports.Words = Words;