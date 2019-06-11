var request = require ('request');

var options = { method: 'GET',
  url: 'https://api.aktia.fi/api/openbanking/sandbox/psd2/ais/v1/accounts/RkkxMjM0NTY3ODkwMTIzNDU2/transactions',
  qs: 
   { dateFrom: '2017-01-01',
     bookingStatus: 'both' },
  headers: 
   { 'accept': 'application/json',
     'consent-id': '12345-1232-123',
     'x-request-id': '99391c7e-ad88-49ec-a2ad-99ddcb1f7721',
     'x-ibm-client-secret': 'U4tY0cL8oV5aI5kN1uC7cM2tX2aA7xP4bI1jE0qK5dD6oF3kM1',
     'x-ibm-client-id': '0e246432-4bbe-498f-8e5b-77fd665775fc' } };

request(options, function (error, response, body) {
  if (error) return console.log(error.message);

  console.log(body);
});