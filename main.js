"use strict";

const express = require('express'), // express를 요청
    layouts = require('express-ejs-layouts'), // express-ejs-layout의 요청
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController'),
    app = express(); // express 애플리케이션의 인스턴스화

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts); 
app.use(express.static("public"));

app.use(
    express.urlencoded({ 
        extended: false
    })
);
app.use(express.json());

app.get('/', homeController.showHome);
app.get('/transportation', homeController.showTransportation); 
app.get('/contact', homeController.showSignUp); 
app.post('/contact', homeController.postedSignUp); 

app.use(errorController.resNotFound); 
app.use(errorController.resInternalError);

app.listen(app.get("port"), () => { 
    console.log(`Server running at http://localhost:${app.get("port")}`);
});