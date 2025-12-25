import z from 'zod';

export const wokflowStep = z.object({});

export const workflowJob = z.object({
  jobName: z.string(),
  name: z.optional(z.string()),
  needs: z.optional(z.union([
    z.string(),
    z.array(z.string()),
  ])),
  steps: z.array(wokflowStep),
});

export type WorkflowJob = z.infer<typeof workflowJob>;

export const workflow = z.object({
  jobs: z.array(workflowJob),
});

export type Workflow = z.infer<typeof workflow>;
