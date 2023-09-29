import express from 'express';
import bodyParser from 'body-parser';
import DataBase from './Database/Database.js';
import Routes from './Routes/Routes.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use('/projects', Routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
