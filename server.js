



console.log('Web Serverni Boshlash');

const express = require('express');
const app = express();
const http = require('http');


// 1. Kirish code
app.use(express.static('public'));  // what public sees
app.use(express.json());    // json object form(web server format)
app.use(express.urlencoded({extended: true})); // recieves html requests// if don't write, express will ignore html form requests 

// 2: Session code

// 3. bssr. Views code
app.set('views', 'views');      // difference?
app.set('view engine', 'ejs');


// 4. Routing code
app.get('/hello', function(req, res) {
    res.end(`<h1 style='background: lightpink'> Hello World by Alex! </h1>`);
});
app.get('/gift', function(req, res) {
    res.end(`<h1 style='background: lightgreen'> You are on gifts page </h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});