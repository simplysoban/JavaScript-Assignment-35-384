console.log("-----------------------------------")
console.log("Question 1")
console.log("-----------------------------------")


function currentDate(){
    let date = new Date();
    return date
}

console.log(currentDate());


console.log("-----------------------------------")
console.log("Question 2")
console.log("-----------------------------------")


function fullName(firstName , lastName){
    let name = firstName + " " + lastName
    return name
    
}

var userFirstName = prompt("Enter your First Name: ");
var userLastName = prompt("Enter your Last Name: ");

console.log("Hi!", fullName(userFirstName, userLastName));


console.log("-----------------------------------")
console.log("Question 3")
console.log("-----------------------------------")


function addition(firstNum, secondNum){
    return firstNum + secondNum;
}

var userFirstNum = Number(prompt("(Addtion) Enter first number: "));
var userLastNum = Number(prompt("(Addition) Enter last number: "));

console.log("The sum of " + userFirstNum + " & " + userLastNum + " is: ", addition(userFirstNum, userLastNum));


console.log("-----------------------------------")
console.log("Question 4")
console.log("-----------------------------------")


function calculator(num1, num2, operator){
    if(operator === "+"){
        return num1 + num2;
    }else if(operator === "-"){
        return num1 - num2;
    }else if(operator === "*"){
        return num1 * num2;
    }else if(operator === "/"){
        return num1 / num2;
    }else if(operator === "%"){
        return num1 % num2;
    }else{
        return "Invalid Numbers or Invalid Operator";
    }
}

var userNum1 = Number(prompt("(Calculator) Enter first number: "));
var userNum2 = Number(prompt("(Calculator) Enter second number: "));
var userOperator = prompt("(Calculator) Enter Operator: ");

console.log("Your Output is: " + calculator(userNum1, userNum2, userOperator));


console.log("-----------------------------------")
console.log("Question 5")
console.log("-----------------------------------")


function square(numToSquare){
    return numToSquare * numToSquare;
}

var userNumToSqr = Number(prompt("(Square) Enter number to square: "));
console.log("The square of " + userNumToSqr + " is: ", square(userNumToSqr));


console.log("-----------------------------------")
console.log("Question 6")
console.log("-----------------------------------")


function factorial(factorialNum){
    if(factorialNum === 0 || factorialNum === 1){
        return 1;
    }else{
        var resultFact = 1;
        for(var i = 1; i <= factorialNum; i++){
            resultFact = resultFact * i;
        }
    return resultFact;
    }
}

var numForFact = Number(prompt("(Factorial) Enter a number: "))
console.log("Factorial of number " + numForFact + " is: " + factorial(numForFact));


console.log("-----------------------------------")
console.log("Question 7")
console.log("-----------------------------------")


function counting(startNum, endNum){
    for(var i = startNum; i <= endNum; i++){
        console.log(i);
    }
}

var userStartNum = Number(prompt("(Counter) Enter an starting number: "));
var userEndNum = Number(prompt("(Counter) Enter an ending number: "));

    
counting(userStartNum, userEndNum);


console.log("-----------------------------------")
console.log("Question 8")
console.log("-----------------------------------")


function calcHypotenuse(base, perpendicular){
    function calcSquare(base, perpendicular){
        return base**2 + perpendicular**2;
    }
    var both = calcSquare(base, perpendicular);
    var hypotenuse = Math.sqrt(both);
    return hypotenuse;
}

var userBase = parseInt(prompt("(Hypotenuse) Enter base length in cm: "));
var userPerpendicular = parseInt(prompt("(Hypotenuse) Enter perpendicular length in cm: "));

console.log("Hypotenuse of " + userBase + "cm Base & " + userPerpendicular + "cm Perpendicular is: " + calcHypotenuse(userBase, userPerpendicular).toFixed(2) + "cm")


console.log("-----------------------------------")
console.log("Question 9")
console.log("-----------------------------------")


function areaRectangle(height, width){
    var area = height * width;
    return area;
}

var userHeight = parseInt(prompt("(Rectangle Area) Enter height in cm: "));
var userWidth = parseInt(prompt("(Rectangle Area) Enter width in cm: "));


console.log("Area of Rectangle with height " + userHeight + "cm & width " + userWidth + "cm is: " + 
areaRectangle(userHeight, userWidth) + "cm");


console.log("-----------------------------------")
console.log("Question 10")
console.log("-----------------------------------")


function calcPalindrome(Word){

    var word = Word.toLowerCase();
    var notPal;
    
    for(var i = 0; i <= Math.floor(word.length / 2); i++){
        if(word[i] == word[word.length - 1 - i]){
            notPal = false
        }else{
            notPal = true
            break
        }
    }

    if(notPal){
        return "The word '" + Word + "' is not a palindrome.";
        
    }else{
        return "The word '" + Word + "' is a palindrome.";
    }
}


var userWord = prompt("Enter a word to check if it's palindrome or not: ");
console.log(calcPalindrome(userWord));


console.log("-----------------------------------")
console.log("Question 11")
console.log("-----------------------------------")


function wordCapitalizer(sentence){

    var words = sentence.split(" ");
    var capitalized = "";
    
    if(sentence.length != 0){
        for(var i = 0; i < words.length; i++){
            var toCapital = words[i]
            var wordCapital = toCapital[0].toUpperCase() + toCapital.slice(1);
        
            capitalized = capitalized + wordCapital;
            capitalized = capitalized + " ";
        }
    }else{
        capitalized = "Sentence not found.";
    }
    return capitalized;
}

var userSentence = prompt("Enter a sentence to capitalize the first letter of each word: ");
console.log(wordCapitalizer(userSentence));


console.log("-----------------------------------")
console.log("Question 12")
console.log("-----------------------------------")


function findLongestWord(sentence2){
    var words2 = sentence2.split(" ");
    var longestWord = "";
    
    for(var i = 0; i < words2.length; i++){
        if(words2[i].length > longestWord.length){
            longestWord = words2[i];
        }
    }
    return longestWord;
}

var userSentence2 = prompt("Enter a sentence to find the longest word: ");
console.log("The longest word in the sentence is: " + findLongestWord(userSentence2));


console.log("-----------------------------------")
console.log("Question 13")
console.log("-----------------------------------")

function findNumberOfOcurrences(sentence3, letter){
    var occCount = 0;
    if(letter.length == 1){
        for(var i = 0; i < sentence3.length; i++){
            if(sentence3[i] === letter){
                occCount++
            }
        }
        
        occCount = occCount + " times the word '" + userLetter + "' occured in the sentence ";
    
    }else{
        occCount = "Please enter a single letter";
    }
    
    return occCount;
}

var userSentence3 = prompt("Enter a sentence to find the number of occurrences of a word: ");
var userLetter = prompt("Enter a letter to get the number of occurrences: ");

console.log(findNumberOfOcurrences(userSentence3, userLetter));


console.log("-----------------------------------")
console.log("Question 14")
console.log("-----------------------------------")


function calcCircumference(r){
    var circumference = 2*Math.PI*r;
    return circumference;
}

function calcArea(r){
    var area = Math.PI*r*r ;
    return area;
}

var radiusCircumference = parseInt(prompt("Enter the radius to know the Circumference of the circle (cm): "));
var radiusArea = parseInt(prompt("Enter the radius to know the Area of the circle (cm): "));

console.log("The Circumference of the Circle is: " + calcCircumference(radiusCircumference).toFixed(2) + "cm.");
console.log("The Area of the Circle is: " + calcArea(radiusArea).toFixed(2) + "cm².");


console.log("-----------------------------------")