const eqObjects = require('../eqObject');


let ab = {a:1, b:2};
let ba = {a:1, b:2};
console.log(eqObjects(ab,ba));


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3] };
console.log(eqObjects(cd, cd2));