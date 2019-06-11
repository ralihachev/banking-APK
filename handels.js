var request = require("request");

var options = { method: 'GET',
  url: 'https://sandbox.handelsbanken.com/openbanking/psd2/v2/accounts/ae51a5f0-6cf3-11e9-9c41-e957ce7d7d69/transactions',
  headers: 
   { accept: 'application/json',
     'tpp-request-id': '9d05c346-8c31-11e9-bc42-526af7764f64',
     'tpp-transaction-id': '9d05c7ce-8c31-11e9-bc42-526af7764f64',
     'psu-ip-address': '127.0.0.1',
     'authorization': 'Bearer MV9QUk9GSUxFLUZJX1BSSVZBVEUy',
     'x-ibm-client-id': 'af4eabcb-ac1d-4bf0-98c6-c5c6f61340a6' } };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
});