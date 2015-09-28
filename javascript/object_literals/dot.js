// dot notation vs.bracket notation
// bracket notation is often the exception


var simpleObj = {
  key1: "This ",
  key2: "is ",
  key3: "awesome!",
};


// console.log(simpleObj.key1 + simpleObj.key2 + simpleObj.key3)
// console.log(simpleObj["key1"] + simpleObj.key2 + simpleObj.key3)


// var simpleObj = {
//   5: "This",
//   key2: "is",
//   key3: "awesome!",
// };

// console.log(simpleObj[5] + simpleObj.key2 + simpleObj.key3)


// When to use bracket notation

var output = ""

for(i=1; i < 4; i++) {
  output +=(simpleObj["key" + i])
}

console.log(output)