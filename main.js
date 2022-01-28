


// Problem No.1 : Multiple of 13 
function multipleOfNumber(num){
    for ( i = 1; i <= 10; i++){
        console.log (num * i);
    }
} 


multipleOfNumber(13);




// Problem No.2 : Uppercased Name to Lowercased Name 

function lowerCase(userName){
    console.log(userName.toLowerCase());
}

var userName = "SAMIN";

lowerCase(userName);



// Optional : Lowercased Name to Uppercased 

function upperCase(userName){
    console.log(userName.toUpperCase());
}

var userName = "joe";

upperCase(userName);




// Problem No.3 : Input Two Names and Making them a Full Name

function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

var playerFirstName = "Hablu";
var playerLastName = "Kanto";


fullName(playerFirstName, playerLastName);



// Problem No.4 : Input of a Number and make a square of that number 

function squareNumber(num){
    console.log(num * num);
}

var myNumber = 5;
squareNumber(myNumber);