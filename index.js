const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');
// database connection
// mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
//   console.log(`Database is connected successfully `.blue.bold);
// });

try {
  mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(' Mongoose is connected')
  );
} catch (e) {
  console.log('could not connect');
}

// server port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
