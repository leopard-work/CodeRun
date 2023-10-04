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
    let ansL = 0;
    let ansR = Infinity;
    let numsCount = 1;

    nums[tree[0]]++;

    while (r < n && l <= r) {
        if (numsCount === k) {
            if (r - l < ansR - ansL) {
                ansR = r;
                ansL = l;
            }
            nums[tree[l]]--;
            if (nums[tree[l]] === 0) {
                numsCount--;
            }
            l++;
        } else {
            r++;
            if (r < n) {
                if (nums[tree[r]] === 0) {
                    numsCount++;
                }
                nums[tree[r]]++;
            }
        }
    }

    console.log(`${ansL + 1} ${ansR + 1}`)
}