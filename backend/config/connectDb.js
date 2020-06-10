const mongoose = require('mongoose');
const config = require('config');
const mongoUri = config.get('mongoUri');

module.exports = connectDB = async () => {
	try {
		await mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });
		console.log('db connected...');
	} catch (err) {
		console.log(err);
	}
};
