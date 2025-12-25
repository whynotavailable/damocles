import express from 'express';

import utils from './utils.ts';
import workflowRoutes from './workflow.ts';

export default function (express: express.Express) {
  utils(express);

  express.use('/workflow', workflowRoutes);
}
