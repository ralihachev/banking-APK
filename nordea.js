var request = require ('request');

var options = { method: 'GET',
  url: 'https://api.nordeaopenbanking.com/v3/accounts/FI7473834510057469-EUR/transactions',
  headers: 
   { 'Accept': 'application/json',
     'Authorization': 'Bearer eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..nkyr77BlG0jP32WF.brdW7n_0oCFf8WVr-z43p8HLGMNGkdyMeNOF2a3x-7wvhxlNUxv1JCo3nUkgxVVrn3if85xL8pLNpKgVpCIc39sLSf5Kt33Yi3fbjpn8TmwUV09mtSh-6NhJ-02l2Wu9KoXKABqSyljPKaoOukb8k-KxzIL4qw6ya9r3vjXzBmkbETTVwEVDXEzskza-5eysD2EQJz9o0GxZmCCXnk7EjjWtse_ycZPNwPNmUszbFfmAQrLwoHlAZ0SEJgk90PX1ysaThGhBHYQ-O9T_x47EgJej-xdA5jTRs93gLCyWSev_-IHfj3XHGAIn-aRVtBmsFfWImxxwyCQNaH0VP5ppxqlOJYAWuvlVWdnlx7AAf_9nuT-7GuyYUxRT5JbdRX3LJD63bWrUuUCYTgm-7M48YC7JywUNW8hjJUHYZ4FJDwI2zLwFxAos3pLRzD7QZS7kH5B8SjQ-A5nTwXSFNQ8Ap9EGR8RSLDl1VK2UMmt3qp5equ3srg-s9dLV6KSlsoGApmFgPCZt_Z1QopO3ZdRk5r6YVu-iYPrQ5LpplsWoG8N5IX9NUn2mFXhS6MqavQwkL5uM10BylW5OTQiwCBJJolDztkDChby3qmW5o8ZZvXLusTSnO2VLGJu3sOrJirK0slRNG6gFb06C_sNmb_4vf-ZexGbPe0k1ywu9LwwPioDKcKoXpfzUyGSkMKcoMqLtEUEPy7a2mYMTiWOnKOjhRnqfCe2KZswu5-_3nUk3XSM3jUq7ZYosqE8dh-tRij7m_564D16rDkK75yshM9MH4CHPIOg4W6gyuB0vjBhUdnks6NsO1gD8fO4tKDzBJqR2FtIusV9iTXBH8AHpmzCNIQ9H8HvC4juETwrH25uI_nNCw1oxL1K08nSktL7GdZIk65HHSGWEu2rblM9jOeBM9fBhBFCCJWrgwDcxAEOKN5-yApVYtsxxl6g9MLArc5E1yisQmZ5J1Enjfw8Eq_g-C2zrOdWicbhONGLjj-kVAGmPEFWZVqfCMagXrsCErleB9lN5SahmrkHnJReIvAB6TV5pWcSiEWgopMulEJb7wad7Nz-0gh0xZuJ9mRgDv_qC3aJ9VZ_oWun1Kfp2iaz6-7otZFGIWiZar_kkc1okjkQIi1OOfZ5xIduQLJ-TDBp_Rp6RI58pcd8TQBeJSNFWYyJJozioFLoTw51ejUr11Yeh578TTvJsqITQSo2ZwcWXtaQcA95pATFXpQ_Tt2sRxyaEY-0SiRouT11hIOWy0TE7rHAzaA-yQ_-V5SOintULKNltGvJ6zcLgaQa3UzhEES8s4bFYrinZlVaxUeruoFNQSiE8nxs7RT0LM9X4XKEwn3kEK2ctiqxWleCCe4SzZN8Y6FFKY4RnObELO4doIUnOnJEU5d0H31pP_7AN1jP2pZuHQtapy8YZcLhOoM8jy1QQ4wdMJLBWc7WTHttBWQCH0UmysOhkhpI-KtCdeK7Mi0IPWF--hKF4PK91VH3leaG91V6QD1w.QAAIsdEJbXw3NUAs2Gjqtw',
     'X-IBM-Client-Id': '892ec76e-cc24-4454-a0d1-0cedbecc0673', 
     'X-IBM-Client-Secret': 'V5tK0qN3tM1pT8eF2uK0qK8dJ6qE5mG4cR3aP4kS5yW5bN0eW3'
    } 
};

request(options, function (error, response, body) {
  if (error) return console.log(error.message);

  console.log(body);
});