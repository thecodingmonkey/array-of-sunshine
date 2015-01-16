/**
  Write a function that takes a string of characters and
  converts the string to an array of the individual characters,
  reverses the array and returns the reversed string of the original.
  Bonus: Use RegEx to create the array
*/
function reverseString(str) {
//  var strArray = str.split("");
  return str.split("").map(function(c, i, a) {
      return a[a.length - 1 - i];
  } ).join('');
}

/**
  Write a function that takes two parameters as input in the order
  of string, character. With the first string parameter use Array
  functionality remove the last character and put it at the beginning
  of the array. Then insert the character passed in the second
  parameter into the second to last position of the array.
  Then convert the array to a string and return it.
*/
function spliceString(str, char) {
  var strArray = str.split("");

  var lastChar = strArray.pop();  // take last character
  strArray.splice(0,0,lastChar);  // and append it to the beginning

  lastChar = strArray.pop();  // save last character to add after
  strArray.push(char);
  strArray.push(lastChar);
  return strArray.join("");
}

/**
  Using the Array map() method write a function that takes an array
  of strings as input and returns a duplicate array with all strings
  in pig latin form. (Ex. "metal" => "etalmay".)
  Note: For now, do not worry about words like "chicken".
  Instead of "ickenchay", it should just become "hickencay".
*/
function speakPigLatin(strArray) {
  return strArray.map( function(c, i, a) {
      var firstChar = c.split("").splice(0,1);
      switch (firstChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          return firstChar + c.substr(1, c.length-1) + "way";
        default:
          return c.substr(1, c.length-1) + firstChar + "ay";
      }
  });
}
