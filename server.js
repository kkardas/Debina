var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var nodemailer = require('nodemailer');
var router = express.Router();

app.use(express.static(path.join(__dirname,'./debina-app/dist')));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

app.get('*', function(req, res, next) {
    res.status(200).sendFile(path.join(__dirname,'./debina-app/dist/index.html'));
});

var port = process.env.PORT || 4002;


// var mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'krzysiekhetto@gmail.com',
//         pass: 'arsenale'
//     }
// });
//
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//
// var sendMailer = router.post('/sendMail', function(req, res) {
//     console.log(req.body);
//     var mailOptions = {
//         from: 'krzysiekhetto@gmail.com',
//         to: 'krzysiekhetto@o2.pl',
//         subject: 'prośba o kontakt od ' + req.body.name,
//         text: 'Telefon kontaktowy: ' + req.body.phoneNumber + '\n Preferowana data wizyty: ' + req.body.date + '\n Mail kontaktowy: ' + req.body.email
//     };
//
//     mailTransporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// });

// app.use('/', sendMailer);

app.listen(port);

console.log('Running on localhost:' + port);