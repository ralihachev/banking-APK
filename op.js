var request = require ('request');

var options = { method: 'GET',
  url: 'https://sandbox.apis.op-palvelut.fi/accounts/v3/accounts/bhQ9c4g36DiRk_H9TvL1US7-G5WOfOcLZ_7d2D5f0WM.ZDf75jTNOXLX1UJO68INfg.ljJKhsD3AD4QmJaujtH9qA/transactions',
  headers: 
   { 'Accept': 'application/json',
     'Content-Type': 'application/json',
     'x-api-key': 'qAp2ApCu2Ujx4kwKyvrFsd2irUexpp2T', 
     'Authorization': 'Bearer 6c18c234b1b18b1d97c7043e2e41135c293d0da9' //has to be modified, for shortage skipped the auth process and took the ready test access token
    } 
};

request(options, function (error, response, body) {
  if (error) return console.log(error.message);

  console.log(body);
});