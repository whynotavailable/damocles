import yaml from 'yaml';
import { workflow, type Workflow } from './workflow-types';

export function workflowToJson(yamlDoc: string): Workflow | string {
  const doc = yaml.parseDocument(yamlDoc);
  const jobs = doc.getIn(['jobs'], true);

  const newJobList: unknown[] = [];

  if (yaml.isMap<yaml.Scalar, yaml.YAMLMap>(jobs)) {
    for (const job of jobs.items) {
      const newObj = {
        ...(job.value?.toJSON()),
        jobName: job.key.value,
      };
      newJobList.push(newObj);
    }
  }

  doc.setIn(['jobs'], doc.createNode(newJobList));

  const parsedDocument = workflow.safeParse(doc.toJSON());

  if (parsedDocument.success === true) {
    return parsedDocument.data!;
  }

  return parsedDocument.error.message;
}
