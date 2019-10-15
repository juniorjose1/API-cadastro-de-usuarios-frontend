const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/exemplo1'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/exemplo1/index.html');
});

app.listen(process.env.PORT || 4200);