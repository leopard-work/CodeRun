const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let k = 0;
let nums = [];


readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n, k] = line.split(/\s/).map(item => parseInt(item));
        } else {
            nums = line.split(/\s/).map(item => parseInt(item));
        }

        curLine++;
    })
    .on("close", () => solve())

function solve() {
    let l = 0;
    let r = 0;
    let sum = nums[l];
    let len = nums.length;
    let ans = 0;

    while (l < len && r < len) {
       if (sum === k) {
           ans++;
           sum -= nums[l];
           l++;
           r++;
           sum += nums[r];
       } else {
           if (sum < k) {
               r++;
               sum += nums[r];
           } else {
               sum -= nums[l];
               l++;
           }
       }
    }

    console.log(ans);
}