const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
     res.render('start.ejs');
});

app.post("/start",(req,res)=>{
     res.render('page.ejs');
});

app.post("/start/complete",(req,res)=>{
     const { name, email, password } = req.body;
     res.render('complete.ejs',{name});
})


app.listen(port,()=>{
     console.log(`system is running at http://localhost:${port}`);
});
