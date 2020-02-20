const express = require('express'); // import package
const app = express(); //execute app
const mongoose = require('mongoose');
require('dotenv/config');

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const postsRoutes = require('./controller/posts');
app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send('We are home');
});

//CONNECT DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: true },
  () => {
    console.log('connected to DB');
  }
);

app.listen(3000);
