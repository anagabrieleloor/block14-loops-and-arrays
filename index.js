//Only odds 


// [ 11, 15]
//  const input1 = [2, 4, 6, 8, 11, 20, 15, 22];
//  let odd1 = [];
//  for (let i = 0; i < input1.length; i++) {
//      if (input1[i] % 2 !== 0) {
//        odd1.push(input1[i]);
//      }
//    }

//    console.log(odd1);

//  // [1, 3, 5, 7, 9]
//   const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let odd2 = [];
// for (let i = 0; i < input2.length; i++) {
//     if (input2[i] % 2 !== 0) {
//       odd2.push(input2[i]);
//     }
//   }

//   console.log(odd2);

//   // [55, 81, 21, 91]
//   const input3 = [70, 42, 55, 81, 21, 91, 34];
//   let odd3 = [];
//   for (let i = 0; i <input3.length; i++) {
//     if (input3[i] % 2 !== 0) {
//       odd3.push(input3[i]);
//     }
//   }
//   console.log(odd3);

//   // [11]
//   const input4 = [2, 4, 6, 8, 10, 11, 12] ;
//   let odd4 = [];
//   for (let i=0; i <input4.length; i++) {
//     if (input4[i] % 2 !==0) {
//       odd4.push(input4[i]);
//     }
//   }
//   console.log (odd4);


//Vowel vs Consonant

let input2 = "hello"
let vowels = 0
let consonant = 0

for (let x = 0; x < input2.length; x++) {
if (input2[x] === "a" || input2[x] === "e" || input2[x] === "i" || input2[x] === "o" || input2[x] === "u") {
    vowels++
}
else {
    consonant++
}
}
console.log(input2 + " has " + consonant + " consonants and " + vowels + " vowels")

//Reverse array

let input3 = [1, 2, 3]
let reverse = []

for(let n = 0; n < input3.length; n++) {
        reverse.unshift(input3[n]);
}
console.log(reverse)

//Fizz buzz
for(let y = 1; y <= 100; y++) {
  if(y % 3 !== 0 && y % 5 !== 0) {
      console.log(y)
  }
  else if(y % 3 === 0 && y % 5 === 0) {
      console.log("FizzBuzz")
  }
  else if(y % 3 === 0) {
      console.log("Fizz")
  }
  else if(y % 5 === 0) {
      console.log("Buzz")
  }
}