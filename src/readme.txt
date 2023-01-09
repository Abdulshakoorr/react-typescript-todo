
// let name:string = "abdul shakoor";
// let count:number= 5;
// let hobbies:string[];
// let tuple:[number,string,boolean];
// tuple=[1,"Abdul",true];
// hobbies=["cricket","football","reading"]
// let person: Object;


// Type 
// type Person = {
//   name:string,
//   age?:number | string,
//   address?:string,
//   gender:string
// }
 
// type can be extended 
// example 
// type a ={
//   a:number,
//   b:string
// };
// type b = a &{
//   c:boolean,
//   d:any
// };

// let kuck:b ={
//   a:5,
//   b:"kuch be",
//   c:true,
//   d:"kuch to hai"

// }

// Interface
// interface Person{
//   name:string,
//   age?:number | string,
//   address?:string,
//   gender:string
// }
// Interface extended
// example 
// interface Person{
//   name:string,
//   age?:number,
//   address?:string,
//   gender:string
// }
// interface isloggin extends Person{
//   isloggin:boolean,

// }

// let person:Person={
//   name:"Abdul",
//   age:18,
//   gender:"male"
// }


// let printName:(name:string)=> void it returns undefined if name is not found
// let printName:(name:string)=> never it returns null if name is not found

// funtion in typeScript
// function printName(name:string | number | boolean) 
// {
//   console.log(name);
  
// };
// printName(true);