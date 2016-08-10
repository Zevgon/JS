function madLib(verb, adjective, noun) {
  console.log("We shall " + verb + " the " + adjective + " " + noun);
}

madLib('fly', 'iridescent', 'zoo');

function isOdd(num) {
  console.log(num % 2 === 1);
}

isOdd(-17);

function yell(str) {
  console.log(str.toUpperCase());
}

yell("I want chocolate");

function isSubstring(str, sub) {
  return str.includes(sub);
}

console.log(isSubstring("saioru", "sai") === true);

function fizzBuzz(array) {
  var i;
  var result = [];
  for (i = 0; i < array.length; i++) {

    if (array[i] % 15 === 0) {
      continue;
    } else if (array[i] % 5 === 0 || array[i] % 3 === 0) {
      result.push(array[i]);
    }

  }

  return result;
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 15, 30, 31, 33]));
