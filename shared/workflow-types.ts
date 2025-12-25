import z from 'zod';

export const workflowJob = z.object({
  jobName: z.string(),
});

export const workflow = z.object({
  jobs: z.array(workflowJob),
});

export type Workflow = z.infer<typeof workflow>;
