const MESSAGE = process.argv[2] ? process.argv[2] : "Test";

let solution = "";
let binMsg = "";

// A function which will take a value and returns a uniary value for it
const toUnary = (_val) => {
  let ans = "";
  let pre = "";

  for (i = 0; i < _val.length; i++) {
    if (_val[i] === "1" && pre !== "0 ") {
      pre = "0 ";
      if (i === 0) {
        ans += pre;
      } else {
        ans += " ";
        ans += pre;
      }
    }

    if (_val[i] === "0" && pre !== "00 ") {
      pre = "00 ";
      if (i === 0) {
        ans += pre;
      } else {
        ans += " ";
        ans += pre;
      }
    }

    ans += "0";
  }

  return ans;
};

for (i = 0; i < MESSAGE.length; i++) {
  let binVal = MESSAGE[i].charCodeAt(0).toString(2);
  while (binVal.length < 7) {
    binVal = "0" + binVal;
  }
  binMsg += binVal;
}

console.log(`The unary value for "${MESSAGE}" is "${toUnary(binMsg)}"`);
console.log(
  '\n\nTo get your own message value run "node <codeName.js> <yourMsg>"'
);
