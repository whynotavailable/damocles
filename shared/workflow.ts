import yaml from 'yaml';

export function workflowToJson(yamlDoc: string): string | null {
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
  else {
    // YAML isn't in the right format
    return null;
  }

  doc.setIn(['jobs'], doc.createNode(newJobList));

  return JSON.stringify(doc.toJSON());
}
