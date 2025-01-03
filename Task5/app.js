const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended : true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));
app.use(methodOverride('_method'));

app.get("/",(req,res)=>{
     res.render('start.ejs');
});

let posts = [
     {
          id : uuidv4(),
          username : "apnacollage",
          content : "i love coding",
     },
     {
          id : uuidv4(),
          username : "vedantu",
          content : "jee related stuff",
     },
     {
          id : uuidv4(),
          username : "myntra",
          content : "lets shop!!",
     },
];

app.get("/posts",(req,res)=>{
     res.render("chat.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
     res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
     let {username,content} = req.body;
     let id = uuidv4();
     posts.push({id,username,content});
     res.redirect("/posts")
});

app.get("/posts/:id",(req,res)=>{
     let {id} = req.params;
     let post = posts.find((p)=>id===p.id);
     console.log(post);
     res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
     let { id } = req.params;
     let newcontent = req.body.content;
     let post = posts.find((p)=>id===p.id);
     post.content = newcontent;
     console.log(post);
     res.redirect("/posts");
});

app.post("/posts/:id/edit",(req,res)=>{
     let { id } = req.params;
     let post = posts.find((p) => id === p.id);
     res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
     let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");
})

app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
})
