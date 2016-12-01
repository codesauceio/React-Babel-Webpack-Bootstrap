var express = require('express');
var app = new express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req,res){
    res.sendFile('/index.html', { root:  __dirname + '/dist' });
});

app.listen(port, function() {
    console.log('listening on port ' + port);
});