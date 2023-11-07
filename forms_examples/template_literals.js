const person = {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);



const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-bkacklist", "no-dup-keys"]
};
// function makeList(arr) {
//     const resultDisplayArray = [];
//     for (let i=0; i<arr.length; i++) {
//         resultDisplayArray.push(`<li class="text-varning">${arr[i]}</li>`);
//     }

//     return resultDisplayArray;
// }
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-varning">no-var</li>`,
 *   `<li class="text-varning">var-on-top</li>`,
 *   `<li class="text-varning">linebreak</li>` ]
 */
const makeList = (arr) => arr.map(element => `<li class="text-varning">${element}</li>`)

const resultDisplayArray = makeList(result.failure)
console.log(resultDisplayArray)
