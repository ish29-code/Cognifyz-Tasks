const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const port = 5050;
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

main()
   .then(()=>{
     console.log("connection sucessfull");
   })
   .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

//start
app.get("/",(req,res)=>{
     res.render('start.ejs');
});

//chat.js
app.get("/chats",async(req,res)=>{
     let chats = await Chat.find();
     console.log(chats);
     res.render("chat.ejs",{chats});
});

//new
app.get("/chats/new",(req,res)=>{
     res.render("new.ejs");
});

//create route
app.post("/chats",(req,res)=>{
     let { from ,to ,msg }= req.body;
     let newChat = new Chat({
       from : from,
       to : to,
       msg : msg,
       created_at : new Date()
     });
     newChat 
      .save()
      .then((res)=>{
       console.log("chat was saved");
      })
      .catch((err)=>{
       console.log(err);
      });
     res.redirect("/chats");
});

//edit
app.get("/chats/:id/edit",async(req,res)=>{
     let {id} = req.params;
     let chat = await Chat.findById(id);
     res.render("edit.ejs",{chat});
});
   
//update route
app.put("/chats/:id",async (req,res)=>{
     let {id} = req.params;
     let {msg : newMsg} = req.body;
     let updatedchat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true,new : true});
     console.log(updatedchat);
     res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id",async (req,res)=>{
     let {id} = req.params;
     let deletedchat = await Chat.findByIdAndDelete(id);
     console.log(deletedchat);
     res.redirect("/chats");
});

app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
})