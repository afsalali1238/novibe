const fs = require('fs');

const resourcesFile = fs.readFileSync('./src/data/resources.ts', 'utf-8');
const nodesFile = fs.readFileSync('./src/data/nodes.ts', 'utf-8');

const rObjectStr = resourcesFile.replace('import type { NodeResource } from "./types";', '').trim();

const newNodesFile = nodesFile.replace(
  'import { R } from "./resources";',
  rObjectStr
);

fs.writeFileSync('./src/data/nodes.ts', newNodesFile);
console.log("Merged R into nodes.ts");
