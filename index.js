var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


// Request Header Parser Challenge
app.get('/api/whoami', function (req, res) {

    res.json({
        "ipaddress": req.ip,
        "language": req.headers["accept-language"],
        "software": req.headers["user-agent"]
    });

});

app.listen(3000, () => {
    console.log('App Listening in Port: ', 3000);
})