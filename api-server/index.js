// stamp API Server

import express from 'express';
import cors from 'cors';
import stamps from './stamps.json' assert { type: 'json' };

const app = express();
const port = 3001 || process.env.PORT;

app.use(cors());

app.get('/api/v1/stamps', (req, res) => {
  res.json(stamps);
});

app.listen(port, () => {
  console.log(`Stamp API listening at http://localhost:${port}`);
});
