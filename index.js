
const { numbering, recon } = require('./numbering');

numbering.prepare('start', 'stop', 4);
const a = numbering.get(67);
console.log(a);

const b = recon('directory/img076.svg', 24);
console.log(b);