var models = require('./models.js');

//exports the whole obj in this file
module.exports = {
  //get is the function name
  getAll: function(req,res){
    //invoke getall and pass in cb definition as an argument
    models.getAll((err,result)=>{
      if(err){
        res.status(401).send('Encouter err during getting data');
      }
      else{
       // console.log(result);
        res.json(result);
      }
    });
  },

  search: function(req,res){
    console.log(req.query);
    //invoke getall and pass in cb definition as an argument
    models.search(req.query.term, (err,result)=>{
     // console.log(req.body);
      if(err){
        res.status(401).send('Encouter err during getting data');
      }
      else{
       // console.log(result);
        res.json(result);
      }
    });
  },

  post:function(req,res){
    //invoke func from models with 2 params new data that want to post and cb
    models.createNewData(req.body,(err,result)=>{
      if(err){
        res.status(401).send('Post failed');
      }
      else{
        res.status(201).send('Post successful');
      }
    });
  },

  delete: function(req,res){
    models.deleteData(req.body,(err,result)=>{
      if(err){
        res.status(401).send("Delete failed");
      }
      else{
        res.status(200).send('Successfully delete item');
      }
    });
  },

  update:function(req,res){
    models.updateList(req.body.id, req.body.term,req.body.definition,(err,result)=>{
      if(err){
        res.status(401).send('update failed');
      }
      else{
        res.status(200).send('Put request successfully complete');
      }
    });
  },

};