var express = require ('express');
var app = express();
var request = require("request");
var port = 8080;

var options = { method: 'GET',
    url: 'https://api.aktia.fi/api/openbanking/sandbox/psd2/ais/v1/accounts/',
    qs:
    { withBalance: 'true' },
    headers:
    { accept: 'application/json',
        'consent-id': '12345-1232-124',
        'x-request-id': '99391c7e-ad88-49ec-a2ad-99ddcb1f7721',
        'x-ibm-client-secret': 'U4tY0cL8oV5aI5kN1uC7cM2tX2aA7xP4bI1jE0qK5dD6oF3kM1',
        'x-ibm-client-id': '0e246432-4bbe-498f-8e5b-77fd665775fc' }
};





app.get('/', function (req, res){
    request(options, function (error, response, body) {
        if (error) return console.error('Failed: %s', error.message);

        res.send(body);
    });
});

app.listen (port, function(){
    console.log('Listening on port '+port)
});





