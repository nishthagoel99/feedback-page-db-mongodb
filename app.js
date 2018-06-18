
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path');
var mongo=require('mongodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static(path.join(__dirname ,'/public')));

var url='mongodb://localhost:27017/mydb';
var MongoClient=mongo.MongoClient;

app.post('/details',function(req,res){

    var obj={
        name:req.body.username,
        email:req.body.emailaddr,
        comment:req.body.coment
    }
 //creating database  
   MongoClient.connect(url,function(err,db){
if(err){
    console.log('error in forming datatbase');
}else
console.log('database created!');
var dbo=db.db('mydb');
//inserting values
dbo.collection("users").insertOne(obj,function(error,result){
if(error){
    console.log('error in inserting');
}
else
console.log('success! query inserted!');
console.log(result);
});
});
});

app.listen(3000);
