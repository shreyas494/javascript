const marvel_heroes=["thor","spider man","taskmaster"]
const dc_heroes=["superman","batman","aquaman"]

const newheroes=marvel_heroes.concat(dc_heroes)
console.log(newheroes);

const myarray=[1,2,3,[1,2,[6,5,4]]]
const newarray=myarray.flat(Infinity);
console.log(newarray);


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
