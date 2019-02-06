const cov = require('istanbul-middleware');
const express = require('express');
const app = express();

// allow posting from different origin domains
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


app.use('/coverage', cov.createHandler()); // mount istanbul middleware here

app.listen(6969);


// that's all folks, lol
