const express = require('express');
const dotenv =  require('dotenv');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const connectDb = require('./config/db');

dotenv.config({path:'./config/.env'});

const contactsRouter = require('./routes/api/contacts');
const userRouter = require('./routes/api/users');


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';


app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/contacts', contactsRouter);
app.use('/api/v1/auth', userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
console.log(err.message);
  if(err.status || err.message) {
   return res.status(err.status=400).json({ message: err.message })
  }
  res.status(500).json({ message: 'Internal Server Error'})
})


const {PORT} = process.env

const server = app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})

process.on('unhandledRejection',(error, _) => {
  if(error) {
      console.log(`Error: ${error.message}`)
      server.close(() => process.exit(1))
  }
})
