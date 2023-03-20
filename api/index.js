const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { Mongoose, default: mongoose } = require('mongoose');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product')

// use packages 
dotenv.config();
app.use(express.json());
// ports 
const port = process.env.PORT||3000;

// Connect MongoDb 
async function main() {
    await mongoose.connect(process.env.MONGO_STRING);
    console.log('Connected To DB');
  }
  main().catch(err => console.log(err));

//   Use Routes 
  app.use('/api/users',userRoute);
  app.use('/api/auth',authRoute);
  app.use('/api/products',productRoute);







// API Ends 

app.listen(port, () => {
  console.log(`The server lisining to port: ${port}`)
})