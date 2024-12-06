const express = require("express");
const path = require("path");
const port = 7070;
const app = express();
const https = require('https');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
     res.render('start.ejs');
});
app.get("/weather",(req,res)=>{
     res.render('weather.ejs');
});
app.post("/weather/go",(req,res)=>{
     const query = req.body.cityname;
     const apikey = '79bdc05050fd694153a630625cb056b9';
     const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apikey+'&units=metric';
     https.get(url,(response)=>{
          //console.log(response.statusCode);
          response.on('data',(data)=>{
               //console.log(data);
               const Weather_data = JSON.parse(data);
               //console.log(Weather_data);
               const temp = Weather_data.main.temp;
               //console.log(temp);
               const description = Weather_data.weather[0].description;
               //console.log(description);
               res.render('go.ejs',{ query: query, temp: temp, description: description });
          })

     });
});


app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`)
})