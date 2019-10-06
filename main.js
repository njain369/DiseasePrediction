var express= require("express");
var app =express();

var bodyParser= require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/check",function(req,res){
    var str=req.body.t1;
    document.getElementById("ta").value=str;

});
/*
var d1=["fever","Headache","Tiredness","nausea","vomiting","Diarrhea"];
var d2=["Headache","Shortness of breath","Cough"];
var k=0;
var l=0;
var ans=["Headache","vomiting","Diarrhea"];
for(var i of d1){
    for(var j of ans){
        if(j===i){
         k++;
        }
    }
}

for(var i of d2){
    for(var j of ans){
        if(j===i){
         l++;
        }
    }
}

if(l>k){
    console.log("Our prediction system shows youu have these D2 disease");
}else{
    console.log("Our prediction system shows youu have these D1 disease");
}
*/
app.get("/jsonajax",function(req,res){
  res.setHeader('Content-Header','application/json');
  var diabetes ={
      0:"thirst",
      1:"Hunger",
      2:"hunger",
      3:"Thirst",
      4:"weight",
      5:"Weight",
      6:"Irritable",
      7:"Skin Infection",
      8:"Infection",
      9:"infection",
      10:"Blurred Vision",
      11:"blurred vision"
  }
  var malaria={
    0:"HeadAche",
    1:"vomiting",
    3:"Diarrhea",
    4:"diarrhea",
    5:"Vomiting",
    6:"abdominal pain",
    7:"Abdominal pain",
    8:"anemia",
    9:"muscle pain",
    10:"fever"
  };
  var d3n={
    0:"Increase in temperature",
    1:"vomiting"
  };
  res.send(JSON.stringify({a:diabetes,b:malaria,c:d3n}));
});
app.listen(8081,function(){
    console.log("Server is On");
});