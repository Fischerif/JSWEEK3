
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //1-1
let firstage= ages.length - ages.length; //first age in array
let lastyear= ages.length - 1;          //last age in array subtract one since arrays start at-
let ageDifference= ages[lastyear]-ages[firstage];
console.log(ageDifference);

let newage=ages.push(10);  //1-2 push adds a variable to the end of an array
let newfirstage= ages.length - ages.length; //same code as above
let newlastyear= ages.length - 1;
let newageDifference= ages[newlastyear]-ages[newfirstage];
console.log(newageDifference);

function averageage (ages){ //1-3
    let sum=0; //create a varible that starts off undefined but then becomes part of a number
        for (let i=0; i<ages.length; i++){ //I really prefer  non arrow arrays 
             sum+=ages[i];
        }
    return sum/(ages.length);
}   
console.log(averageage(ages));

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //2
function avgLength(names) {
    let sum = 0;
         for (let i = 0; i < names.length; i++) {
            sum += names[i].length;
         }
    return sum / names.length;
}
console.log(avgLength(names));

function concat(names) { //2-2
    let sum = "";
        for (let i = 0; i < names.length; i++) {
            sum += names[i] + " ";
        }
    return sum;
}
console.log(concat(names));

//3 you can add to the end of an array using push and access the last element using array[array.length-1]
//4 you can add to the beginning of an array using unshift and access the first element using array[0]

names = ['Maddison', 'Vicario', 'HMSON', 'Bissouma']; //5 This was one of the harder ones
console.log(names);
let nameLengths = [];
function nameLengthsFunction(names) {
for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }
    return nameLengths;
}

console.log(nameLengthsFunction(names)); //6 
function sumOfNameLengths(nameLengths) {
    let sum = 0;
    for (let i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    return sum;
}
console.log(sumOfNameLengths(nameLengths));

let word= "COME ON YOU SPURS "; //7 easy loop
let n=7;
function Repeater (word, n) {
    return word.repeat(n);
}
console.log(Repeater(word, n));

let firstName= 'Dejan' //8 Gimme gimme gimme a ginger from sweden
let lastName= 'kulusevski'
function fullName (firstName, lastName){
    return firstName + "     " + lastName; //made sure to concantenate with a extra big space to show off that it works 
}   
console.log(fullName(firstName, lastName));

let numbers = [75, 42,83, 45, 12]; //9 adds numbers EZ
function sumOfNumbers(numbers){
    let sum=0;
        for (let i=0; i<numbers.length; i++){
            sum+=numbers[i];
        }
    return sum;
}
if (sum => 101){ // wouldn't work if I didn't use greater or equal to I think because of my Italian keyboard
    console.log("its over 100");
}

let number = [1882, 1951, 1963, 1972, 2008]; //10 code copied from 1-3, every year spurs have won something, god we suck
function averageage (number){ // didn't change the function name
    let sum=0;
        for (let i=0; i<number.length; i++){
            sum+=number[i];
        }
    return sum/number.length;
}   
console.log(averageage(number));

//11 I could not figure out how to do 11 no matter what I tried, Think it might be related to having an Italian keyboard IDK
console.log('NO IDEAD')


let isHotOutside = true; //12 works purfectly pretty easy
let moneyInPocket = 3;
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside && moneyInPocket > 10.50){ // Money must be more than 10.50 its really expensive lemonade dude
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

tottenhamScore= 81; //13 CHECKING WHOS GONNA WIN THE PREM
manCityscore=101; 
arsenalScore= 100;
function whoToSupport(tottenhamScore, manCityscore, arsenalScore){ // if tottenham lead then COYS
      if (tottenhamScore > manCityscore && tottenhamScore > arsenalScore){
        return "COME ON YOU SPURS";
}
else if (manCityscore > tottenhamScore && manCityscore > arsenalScore){ // if City lead then City till July
    return "I'M CITY TILL JULY, I'M CITY TILL JULY, I KNOW I AM, I'M SURE I AM, I'M CITY TILL JULY";
}
else {
    return "THROW TV OUT OF WINDOW"; //NO COMMENT
}
}
    console.log(whoToSupport(tottenhamScore, manCityscore, arsenalScore));