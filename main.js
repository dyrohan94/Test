var express = require('express');
fs = require('fs');

var app = express();

app.get('/get_meta_data/:module/:screen', function (req, res) {

    let path;

    if (req.params.module == "tradelicense" && req.params.screen == "apply") {
        path = __dirname + "/apply.json";
    } else if (req.params.module == "finance" && req.params.screen == "collect") {
        path = __dirname + "/collect.json";
    } else {
        res.send("No Data Found");
        process.exit();
    }

    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });

});

var server = app.listen(8000, function () {
    console.log('server is running at ' + server.address().port + ' port');
});