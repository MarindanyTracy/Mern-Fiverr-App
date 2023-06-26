import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import gigRoute from './routes/gig.route.js';
import conversationRoute from './routes/conversation.route.js';
import authRoute from './routes/auth.route.js';

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB!");
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

app.use(express.json())

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);


app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
  connect();
});
