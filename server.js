const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');



const port = process.env.PORT || 3000
const app  = express();

if(process.env.NODE_ENV == "production") {
  require('dotenv').config()
  console.log("Production Mode!");
}

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname + '/src')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
  const helper  = require('sendgrid').mail;
  var fromEmail = new helper.Email('noreply@gmail.com');
  var toEmail = new helper.Email('ereyes@pixnabilab.com');
  var subject = "Sendgrid Email Test!";
  var content = new helper.Content('text/plain', 'Sengrid test sending emails');
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  console.log('first step');
  var sg = require('sendgrid')('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')
  console.log('API key');
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  })

  sg.API(request, function(error, response) {
    if(error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  })

  console.log("email sent");
})



app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
})
