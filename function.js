// Function

// Function without parameter.

// function greet(){                -defination
//     console.log("Hello");        -argument
// }
// greet()                          -function call.

function sq(){
    let x=2;
    let square= x*x;
    console.log(square);
}
sq()

// Function with parameter.

function xYZ(x,y,z,a){
    let mul= x*y*z*a
    console.log(mul);
}

xYZ(1,2,3,2)

function fullName(fName,lName){
    let name= fName + " " +lName
    // console.log(name);
    return name;
}
console.log(fullName("Roshan","Guragain"))


// Area of Circle

function Area(r){
    let aOC= Math.PI *r *r;
    console.log(aOC);
}

Area(5)


// arr as parameter in function
// if we know the length

function sumOfArray (arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum= sum + arr[i];
       
    }
    return sum;
}

console.log(sumOfArray([1,2,3]))

// for of
// if we know dont the lengthcls
function sumOfA (...arr){
    let sum=0;
    for(let element of arr){
        sum= sum + element;
    }
    return sum;
}

console.log(sumOfA(1,6,3))


// Arrow function

let s= (...arr)=>{
    let sum=0;
    for(i=0; i<arr.length; i++){
         sum= sum + arr[i];
         
    }
    return sum;
}

console.log(s(1,2,3,4,5));