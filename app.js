



console.log('Web Serverni Boshlash');

const { SlowBuffer } = require('buffer');
const express = require('express');
const res = require('express/lib/response')
const app = express();
const fs = require('fs');


let user;
fs.readFile('database/user.json', 'utf8', (err, data) => {
    if(err) {
        console.log("ERROR", err);
    } else{
        user = JSON.parse(data)
    }
})
// MongoDB call
const db = require('./server').db()
const mongodb = require('mongodb')


// 1. Kirish code
app.use(express.static('public'));  // what public sees
app.use(express.json());    // json object form(web server format)
app.use(express.urlencoded({extended: true})); // recieves html requests// if don't write, express will ignore html form requests 

// 2: Session code

// 3. bssr. Views code
app.set('views', 'views');      // difference?
app.set('view engine', 'ejs');


// 4. Routing code
app.post('/create-item', (req, res) => {
    console.log('user entered /create-item')
    // console.log(req.body);
    const new_reja = req.body.reja;
    db.collection('plans').insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops)
        res.json(data.ops[0])
    });
    // TO Do: code with db here
    // console.log(req.body);          //req has all information inside
    // res.json({ test: 'success' });
});

app.post('/delete-item', (req, res) => {
    const id = req.body.id;
    console.log(id)
    db.collection('plans').deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data) {
        res.json({state: 'Succsess!(delete)'});
    });
});

app.post('/edit-item', (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection('plans').findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, function(err, data) {
        res.json({state: 'Succsess!(edit)'})
    })
});

app.post('/delete-all', (req, res) => {
    if(req.body.delete_all) {
        db.collection('plans').deleteMany(function() {
            res.json({state: 'All deleted'})
        })
    }
})
app.get('/author', (req, res) => {
    res.render('author', {user: user});
})


app.get('/', function(req, res) {
    console.log('user entered /')
    db.collection('plans').find().toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end('Something went wrong')
        } else {
            // console.log(data);  not necessssary
            res.render('reja', {items: data});
        }
    });
});



// app.get('/hello', function(req, res) {
//     res.end(`<h1 style='background: lightpink'> Hello World by Alex! </h1>`);
// });
// app.get('/gift', function(req, res) {
//     res.end(`<h1 style='background: lightgreen'> You are on gifts page </h1>`);
// });
// app.get('/', function(req, res) {
//     res.render('harid');
// });



module.exports = app;