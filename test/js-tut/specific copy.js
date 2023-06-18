document.getElementById("demo").innerHTML = 'Hello Javascript';
document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.display = "block";

// data types:
// - undefined
// - null
// - boolean
// - string
// - symbol
// - number (can be decimal)
// - object

// declaration: 	   var a 
// assign: 			   a = 10
// declare and assign: var a = 10;
// uninitialized: 	   undefined

// case sensitive: camel case
// camel case: camelCase (small letter first, capital on every subsequent word)

// rekenen
// adding:    a + 2 (a = a + 2  OR  a += 2)
// subtract:  a - 2 (a = a - 2  OR  a -= 2)
// multiply:  a * 2 (a = a * 2  OR  a *= 2)  (product)
// divide:    a / 2 (a = a / 2  OR  a /= 2)  (quotient)

// remainder: a % 2 (what remains after dividing by 2, can be used for even/odd (1 or 0))

// increment:  a++ (add 1)
// decrement:  a-- (subtract 1)

// strings
// between ' or " or `

// escape out of quotes
// quotes in string: "I am a "double quoted" string" moet zijn
//					 "I am a \"double quote\" string" of
//					 'I am a "double quoted" string'
// 	\'	
// 	\"		
// 	\\ = backslash		
//	\n = new line
//	\r = carriage return		
// 	\t = tab		
//	\b = backspace
//	\f = form feed

// ourStr = "I come first. " + "I come second." 
// or ourStr += "I come second."

// length of string: add ".length" > var.length

// bracket notation to find character in location
// firstName[0] = "what is the first character in string firstName"
// can't be used to change a single character in a string (CAN be used for arrays!)
// (nth to ) find last letter in a string with var[var.length - 1]; (or - nth)

// word blanks
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
// 	var result = "";
// 	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
// 	return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// arrays
// var ourArray = ["John", 23];
// nested/multi-dimentional array: [] within [] > [["string", 23], ["str", 2]]
// find index in array = array[0] (first data field in array)
// ourArray[1] = 45; (changes second character in array) (CAN'T be used for strings)
// 