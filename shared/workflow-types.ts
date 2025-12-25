import z from 'zod';

export const workflowStep = z.object({
  name: z.optional(z.string()),
  uses: z.optional(z.string()),
  run: z.optional(z.string()),
  with: z.optional(z.record(z.string(), z.string())),
});

export type WorkflowStep = z.infer<typeof workflowStep>;

export const workflowJob = z.object({
  jobName: z.string(),
  name: z.optional(z.string()),
  needs: z.optional(z.union([
    z.string(),
    z.array(z.string()),
  ])),
  steps: z.array(workflowStep),
});

export type WorkflowJob = z.infer<typeof workflowJob>;

export const workflow = z.object({
  jobs: z.array(workflowJob),
});

export type Workflow = z.infer<typeof workflow>;
