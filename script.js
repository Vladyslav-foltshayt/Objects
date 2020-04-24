let city1 = {name : "ГородN", population : 10000000, getName (){return this.name},  
 exportStr:  function(){return "name = " + this.name + "\n population = " + this.population +"\n"}} 
 Object.defineProperty(city1 , "exportStr", { enumerable:false });

let city2 = {name : "ГородM",
    population :  10000000,  getName (){return this.name},  exportStr (){return "name = " + this.name + "\n population = " + this.population +"\n"} }
    Object.defineProperty(city2 , "exportStr", { enumerable:false });

console.log(city1.exportStr())
console.log(city2.exportStr())

for(let i in city1){
    console.log(i);
}