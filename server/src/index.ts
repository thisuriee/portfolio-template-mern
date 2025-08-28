import express from 'express';
//import contactRouter from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

//app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
