let exampleKey = ['color', 'background','border'];
let exampleValue = ['red','yellow','1px solid black'];

let obj = {};
for (i=0; i<exampleKey.length; i++) {
  obj[exampleKey[i] = exampleValue[i]];
}