
var phase0 = {
  prop1: 1,
  prop2: "string",
  prop3: false,
  prop4: function() {
    return "prop4 is the best prop out there."
  },
};

// console.log(phase0.prop1)
// console.log(phase0.prop2)
// console.log(phase0.prop3)
// console.log(phase0.prop4())

// for (var i in phase0) {
//   if (phase0.hasOwnProperty(i)) {
//     console.log(phase0[i])
//   }
// }

var phase1 = {
valuableInfo: phase0.prop2
}

phase1.valuableInfo = "super cool programming stuff"

console.log(phase1.valuableInfo)
console.log(phase0.prop2)

