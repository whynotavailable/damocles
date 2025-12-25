import { addRoute } from './router';

addRoute('workflow-get', async (body, res) => {
  res.json({
    name: 'dave',
  });
});
