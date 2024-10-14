// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

const app = express();

// Middleware to handle JSON bodies
app.use(express.json());

// Use 'userRouter' for all routes under '/api/user'
app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
