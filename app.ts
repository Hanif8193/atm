#! /usr /bin / env node
import inquirer from "inquirer";
let myBalance =  10000 ; // $
let myPin = 6831;
let pinAnswer = await inquirer.prompt([
    {
      name : "pin" ,
      message : "enter your pin" ,
      type : "number"
    }
]);
if (pinAnswer.pin === myPin){
 console.log("correct pin code!!!");
}
let opersationAns = await inquirer. prompt ([
    {
        name : "operation",
        message : "piease select option",
        type : "list",
        choices : [ "withdraw", "check balance"]
         
    }
]);

console.log ("operation");
 if (opersationAns.operation === "withdraw"){
    let amountAns  = await inquirer. prompt ([
        {
            name : "amount",
            message : "enter your amount",
            type: "number"
        }
    ]);
 
 myBalance -= amountAns. amount;
//  console.log ("your remaining balance is:" + myBalance);
console.log (`your remaining balance is : ${myBalance}`);

}
 else if (opersationAns.operation === "check balance")
    // console.log("your balance is" + myBalance);{

    
console.log(`your balance is: ${myBalance}`)
 else if(opersationAns.operation === "check balance"){

 
 

 }
 else { console.log ("incorrect pin number");

 }

    
    

