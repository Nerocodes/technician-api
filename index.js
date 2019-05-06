import express from 'express';


const app = express();
const PORT = process.env.PORT || 9001;

app.get('/', (req, res) => {
  return res.send('Technician api');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});