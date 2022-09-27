import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { Schema } from './schema.model';

export default async function (tree: Tree, schema: Schema) {
  await libraryGenerator(tree, { 
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `type:util, scope:${schema.directory}`
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
