import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import adminRoutes from "./routes/admin.js"
import morgan from 'morgan';
import session from "express-session"
import memorystore from "memorystore"
// import path from "path"
const memorystoree= memorystore(session)
dotenv.config();
const app = express();
app.use(session({
    saveUninitialized:false,
    cookie:{maxAge:86400000},
    store: new memorystoree(
        {        checkPeriod:86400000
        }    ),
    resave:false,
    secret:"thisissecret"
}))
// app.use(express.static(path))
// app.use(express.json(path.join(__dirname,"uploads")));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/admin',adminRoutes)

// Mongoose setup
const PORT = process.env.PORT || 5000;
mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser : true, useUnifiedTopology : true})
.then(()=>app.listen(PORT,()=>console.log(`server is runnine on localhost:${PORT}`)))
.catch((err)=>console.log(err))

//Deploy

if (process.env.NODE_ENV = "production") {
    app.use(express.static("client/build"))
}