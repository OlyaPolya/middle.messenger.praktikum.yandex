import express from 'express';
import path from 'path';

const app = express();
const port = 4000;
const __dirname = path.resolve();

//app.use(express.static(__dirname + '/dist'));

app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// app.get('/', (request, response) => {
//   response.send('Hello world!');
// });

app.listen(port, () => console.log(`Running on port ${port}`));



