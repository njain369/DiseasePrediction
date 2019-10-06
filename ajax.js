var express=require("express")
var app=express();

app.get("/test",(req,res)=>{
    res.send("<h1>Executing Test Handler</h1>");
})


app.get("/jsonendpoint1",(req,res)=>{
 res.setHeader('Content-Type','application/json');
 res.send(JSON.stringify({x:1,y:2}));
})

app.get("/jsonendpoint2",(req,res)=>{
res.setHeader('Content-Type','application/json');
res.send(JSON.stringify({message: "Love AJAX",times:3}));

})
var i=0;
app.get("/json123",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    /*
while(malaria[0]===chickenpox[0]){
dis=chickenpox[0];
    chickenpox[0]=chickenpox[1];
}*/

    // var disdataset ={
        
    //     'question':"Select Below Your Symtoms ..we are analysing your symtoms!!",
    //     '1':malaria[0],
    //     '2':chickenpox[0]    }

     var malaria={
         first:"Continous Fever for more than a week",
         second:"Diarrhea"
}
    var chickenpox=[
        "Rashes",
        "Naushea",
        "fever",
        "HeadAche",
        "Blister"
    ]

    res.send(JSON.stringify({question:"Select Below Your Symtoms ..we are analysing your symtoms!!",
    d1:chickenpox[i],
    d2:malaria.first}));
 //chickenpox[0]=dis;
 if(i<4){
 i++;   
 }
});

app.use(express.static("public"));
app.listen(8081,(req,res)=>{
    console.log("Getting started");
})

console.log("Starting Stage3");