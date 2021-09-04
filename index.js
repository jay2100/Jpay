var QRcode = require('qrcode');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send(`<body style="width: 95vw; height:85vh">
    <div style="display:flex;align-items:center;justify-content:center;width: 95vw; height:85vh">
    <h1>Welcome to Jpay</h1>
    </div>
    </body>`)
});

app.get('/api/qrcode', (req,res) => {
    var amt = req.query.amt;
    QRcode.toDataURL(`upi://pay?pa=jaynil@jio&pn=THAKKAR JAYNIL MAHESHKUMAR&am=${amt}`, (err, url) => {
        if (err) throw err;

        res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payout J Pay</title>
    <style>
        h1{
            text-align: center;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .qrcode{
            width: 200px;
            height: 200px;
        }
    </style>
</head>
<body>
    <h1>Scan QRcode <br>&<br> Complete the payment</h1>
    <div><img class="qrcode" src="${url}" alt=""></div>
    <div><h3>Amount : <h1>₹${amt}</h1></h3></div>
</body>
</html>`);
    });
})

let portNumber = process.env.PORT || port;
app.listen(portNumber, () => console.log(`Connected`));