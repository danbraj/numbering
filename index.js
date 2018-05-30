const { prep, recog } = require('./numbering');

const m = prep('start', 'stop', 4);
const a = m.get(67);
const b = m.get(128);
console.log(a, b);

const n = recog('directory/img076.svg');
const c = n.get(256);
const d = n.get(24);
console.log(c, d);