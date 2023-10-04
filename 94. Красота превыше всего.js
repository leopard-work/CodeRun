const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let k = 0;
let tree = [];


readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n, k] = line.split(/\s/).map(item => parseInt(item));
        } else {
            tree = line.split(/\s/).map(item => parseInt(item));
        }

        curLine++;
    })
    .on("close", () => solve())

function solve() {
    let l = 0;
    let r = 0;
    let nums = new Array(k + 1).fill(0);
    let start = 0;
    let space = Infinity;

    nums[tree[0]]++;

    while (r < n && l <= r) {
        //if (nums.filter(elem => elem > 0))
    }
}

// function solve() {
//     let count = new Array(k + 1).fill(0);
//     let left = 0;
//     let right = 0;
//     let minLength = Infinity;
//     let minLeft = 0;
//
//     count[colors[0]]++;
//
//     while (right < n && left <= right) {
//         if (count.filter(c => c > 0).length === k) {
//             if (right - left + 1 < minLength) {
//                 minLength = right - left + 1;
//                 minLeft = left;
//             }
//             count[colors[left]]--;
//             left++;
//         } else {
//             right++;
//             if (right < n) {
//                 count[colors[right]]++;
//             }
//         }
//     }
//
//     console.log(minLeft + 1, minLeft + minLength);
// }