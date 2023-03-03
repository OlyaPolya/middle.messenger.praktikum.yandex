/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;
const __dirname = path.resolve();
app.use(express.static(`${__dirname}/dist`));

app.use('/*', (_, res) => {
  res.sendFile(`${__dirname}dist/index.html`);
});

app.listen(port, () => console.log(`Running on port ${port}`));
