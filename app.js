var app = require('./config/express')();
var rotasSite = require('./app/routes/router')(app);
var rotasKeywords = require('./app/routes/keywords')(app);


const express = require('express');
// All stay in Public is free to shared
global.APP_ROOT = require('path').join(__dirname);
app.use(express.static(APP_ROOT + '/public'));


// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/send', (req,res) => {
    const output = `
    <h3>Instituto de Iniciaçoes Maçonicas</h3>
    <p>#LuPercio Esta preparando
    </p>
   
      <!-- EXEMPLE TO GET INPUT >> <li>Nome: ${req.body.name}</li> -->
     
  `;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'mail.agencia33.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'fabio@agencia33.net', // generated ethereal user
        pass: 'abc123456'  // generated ethereal password
    },
    tls:{
        rejectUnauthorized:false
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Nodemailer <fabio@agencia33.net>', // sender address
    to: 'fabio@agencia33.net', // list of receivers
    subject: 'Nodemailer', // Subject line
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

res.render('contact', {msg:'E-mail enviado com sucesso'});
});


// Server listen
app.listen(3000, function () {
    console.log('server on port 3000');
});
