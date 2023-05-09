//truthy strings are strings which are not empty including empty object while falsy, are values when converted to boolean they turn false(0,'',undefined,null,NaN)
const money=0
if(money){
    console.log("you are rich😀");
}else{
    console.log("you are bankrupt");
}//the console is you are bamkrpt because 0 is a falsy(if block is executed whenever the value is truthy )

//undefined
let vehicles;
if(vehicles){
    console.log("vehicle is defined")
}else{
    console.log("vehicle is not defined")
}
//NaN(not a number)
const firstName='John'
console.log(typeof firstName)
console.log(Number(firstName));
