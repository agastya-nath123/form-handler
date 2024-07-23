const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
    const data = req.body;
    const name_val = data.name;
    const email_val = data.email;
    const phone_val = data.phone;
    const bday_val = data.bday;
    const userId_val = data.user;

    console.log(data);
    res.send(`<h1>Received Data</h1>
              <br>
              <h3>Name: ${name_val}</h3>
              <h3>Email: ${email_val}</h3>
              <h3>Phone: ${phone_val}</h3>
              <h3>Date of Birth: ${bday_val}</h3>
              <h3>User Id: ${userId_val}</h3>
              <h1>Your data has been safely sent to the servers</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
