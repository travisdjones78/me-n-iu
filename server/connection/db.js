const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/budsbreeds';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', async () => {
  console.log(
    `Mongoose connected to ${connectionString} 
    `,
    '=========',
    // 'Hope you enjoy MatchMaker!'.america.bold,
    // '=========\n',
  );
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});