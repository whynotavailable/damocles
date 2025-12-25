import express from 'express';

const router = express.Router();

router.get('/', (_, res) => {
  res.send('hi');
});

export default router;
