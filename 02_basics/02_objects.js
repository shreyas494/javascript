//object literals

const mySym=Symbol("key1")
const myobject={
    name:"shreyas",
    //key   value
    [mySym]:"key2",
    age:20,
    city:"solapur"

}



// console.log(myobject["name"]);
// console.log(myobject.name);

// console.log(myobject[mySym]);


myobject.greeting=function(){
    console.log(`hello ${this.name}`);
    
}

//console.log(myobject.greeting);
console.log(myobject.greeting());




