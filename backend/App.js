// App.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import DataBase from './Database/Database.js';
import AdminRouter from './Routes/AdminRouter.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())

app.use(cors());
app.use('/admin', AdminRouter)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
