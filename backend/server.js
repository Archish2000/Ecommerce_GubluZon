import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';//Not from youtube 1


dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {

  useNewUrlParser: true ,
  useUnifiedTopology: true,
    useCreateIndex: true,

}).catch(error => console.log(error.reason));


const app = express();
app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use("/api/orders", orderRoute);//Not from youtube 2

//This entire section below is 2.3
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
})


/*app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
      res.send(product);
    else
      res.status(404).send({msg: "Product Not Found."})
  });

  app.get("/api/products", (req, res) => {
    res.send(data.products);
  });*/

  app.listen(5000, () => { console.log("Server started at http://localhost:5000") });
  