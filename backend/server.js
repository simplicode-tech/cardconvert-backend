import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import signUpRoute from './routes/signUpRoute.js';
import loginRoute from './routes/loginRoute.js';
import { authenticateUser } from './middlewares/authenticateUser.js';
import { isAdmin } from './middlewares/authenticateUser.js';
import tradegiftcardroute from './routes/tradegiftcardroute.js';
import updateCardBaseRoute from './routes/updateCardBaseRoute.js'
import findAllCardBaseRoute from './routes/findAllCardBaseRoute.js'


import uploadRoutes from './routes/uploadRoute.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch(console.error);
// signup route
app.use('/user', signUpRoute);
// log in route
app.use('/user', loginRoute);
// photos uloading testing
app.use('/api', uploadRoutes);

// uploadgiftcard route
app.use('/userdashboard', authenticateUser, tradegiftcardroute);
// update card base
app.use('/admin', authenticateUser, isAdmin, updateCardBaseRoute);
// find all card base
app.use('/admin',  authenticateUser, isAdmin, findAllCardBaseRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));