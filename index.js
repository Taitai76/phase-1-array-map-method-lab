const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased(){
  const newTut=tutorials.map(upperWord);
  return newTut;
}
function upperWord(value){

  return value.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  //value.split(' ');

  //for (var i = 0; i < value.length; i++) {
  //  value[i] = value[i].charAt(0).toUpperCase() + value[i].slice(1);
  //}

  //return value.join(' ');
}





