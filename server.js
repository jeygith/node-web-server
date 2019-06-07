const express = require('express');

const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    console.log(req);
    // res.send("<h1>Hello Express!</h1>")
    /*    res.send({
            name: "Jeff",
            likes: [
                'football', 'code'
            ]
        })*/
    res.render('home.hbs', {

        pageTitle: 'About Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Welcome to my website!'
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {

    res.send({
        errorMessage: 'Unable to handle request'
    })

});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});