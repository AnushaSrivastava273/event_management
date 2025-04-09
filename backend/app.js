import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './database/connectDB.js';
import messageRouter from './router/messageRouter.js';

dotenv.config({ path: './config/config.env' });

const app = express();

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174'
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin.trim())) {
            callback(null, true);
        } else {
            callback(new Error('CORS policy error: Origin not allowed'));
        }
    },
    methods: ['POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


//  Connect to MongoDB properly
(async () => {
    try {
        await connectDB();  //  Await the connection here
    } catch (error) {
        console.error("❌ Database connection failed!", error);
        process.exit(1);  // Stop the server if DB fails
    }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/message', messageRouter);

export default app;
