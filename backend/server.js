const express = require('express');
const path = require('path');
const connectDb = require('./config/connectDb');
const user = require('./routes/user');
const app = express();

app.use(express.json());
connectDb();

app.use('/', user);

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => (err ? console.log(err) : console.log('server is running')));
