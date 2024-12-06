const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req,res)=>{
     res.render('start.ejs');
})

app.post("/start",(req,res)=>{
     res.render('main.ejs');
});

app.post("/start/submit",(req,res)=>{
     res.render('complete.ejs');
})


app.listen(port,()=>{
     console.log(`Server running at http://localhost:${port}`);
});