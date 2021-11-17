// conditional example
// definition : perform different operations baased on given conditon

// task : define whether a number is positive or negative

let integer = 1

//  inside the paranthesis, make a logical statement
if(integer < 0) {
    console.log("Negative : " + integer)
} else{
    console.log("positive: " + integer)
}

// task : settinf up security web site that grants users over the age of 18+ access to the site. write a conditional that 

let age = 18
if(age >= 18){
    console.log("Age is " + age + ", access granted")

}else{
    console.log("Age is " + age + ", access denied")
}

//nested if statement
let num = 100
if(num > 100 ){
    console.log(num + " is greater than 100 and its positive")
    } 
    else if (num < 100 && num > 0)
    {
        console.log(num + "is less than 100")
    }
    else if(num < 0){
        console.log(num + " is negative")
    }
    else if(num === 100){console.log("We got Hundred")}
    else {
        console.log("error")
    }

    //task for grade findig

    let grade = 167

    if(grade >= 90){ 
        console.log("A")
    }else if(grade >= 80){
        console.log("B")
    }
    else if(grade >=70){
        console.log("C")
    }
    else if (grade >= 55){
        console.log("D")
    }
    else{ 
        console.log("F")
    }

    // LOOPS

    // FOR loop

    // Task : loop that iterates from 0 to 9

    for(let i = 0; i < 10; i++){
     console.log(i)
    }

    // loop from 10 to 1
    for(let x = 10; x > 0; x--){
        console.log("X is " + x)
    }

    //task loop output 1,3,5,7,9

    for(let y = 1; y < 10; y+=2){
        console.log("odd numbers " + y)
    }

    // even nubers
    for(let z =2; z <= 10; z+=2){
        console.log("Even numbers " + z)
    }

    // ==REMAINDER OPERATOR=====

    // Remainder operator (modulo) 

    console.log("Remainders" + 4 % 3)

    // 24 is even then true
    console.log(24 % 2 === 0)

    //35 is odd?
    console.log(35 % 2 !== 0)

    console.log(35 % 2 === 1)