/*
1a. Create a LET variable named warmHugs and set this string as the value for the variable "Hi, I'm Olaf and I like warm hugs."

1b. Using a string method, display the string value of warmHugs in uppercase text in the console/terminal. (Need to use a console log on this one)

1c. Using a string method that takes an argument, change the word "like" to "love" in the warmHugs variable string. Also, use this new string that is returned/created from the string method to update the value for the warmHugs variable.

2a. Create a variable named beenImpaled and set this string as the value for the variable "Oh, look at that. I've been impaled."

2b. Using a string method that takes an argument, only display the "I've been impaled." section of the beenImpaled string in the console/terminal. (Need to use a console log on this one as well).

3a. Create a variable named dotDotDot and set this string as the value for the variable "..."

3b. Create another variable called skullBones. Using the dotDotDot variable and a template literal, set the value for the skullBones variable to "I don't have a skull...or bones."

4. Display the number for PI in the console/terminal (HINT: Need to use a Math Object Property. Also need to use a console log as well)

5. Create a variable called randomNumber. Use Math.random() to set a value for the randomNumber variable so that it will be a random whole number value from 1 to 3.

*/

let warmHugs = "Hi, I'm Olaf and I like warm hugs."

console.log(warmHugs.toUpperCase());

warmHugs = warmHugs.replace("like","love")

let beenImpaled = "Oh, look at that. I've been impaled."

console.log(beenImpaled.slice(18,36));

let dotDotDot = "..."

let skullBones = `I don't have a skull${dotDotDot}or bones.`

console.log(skullBones);

console.log(Math.PI)

let randomNumber = Math.floor(3*Math.random())+1
console.log(randomNumber);