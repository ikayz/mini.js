// If statement vs Ternary Operator
var a = 20;
var b = 43;
var numsMatch;

if (a == b) {
  numsMatch = true;
} else {
  numsMatch = false;
}

console.log(numsMatch);
console.log(a == b ? "They match" : "They don't match"); // Ternary Operator
