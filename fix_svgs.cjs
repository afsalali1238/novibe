const fs = require('fs');
let content = fs.readFileSync('src/data/nodes.ts', 'utf8');

content = content.replace(/fill="color-mix\(in oklch, var\(--([^)]+)\) (\d+)%, transparent\)"/g, (match, variable, percentage) => {
    let opacity = parseInt(percentage) / 100;
    return `fill="var(--${variable})" fill-opacity="${opacity}"`;
});

fs.writeFileSync('src/data/nodes.ts', content);
console.log('Fixed SVGs!');
