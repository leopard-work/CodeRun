const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let n = 0;
let k = 0;
let dist = [];


readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        if (curLine === 0) {
            [n, k] = line.split(/\s/).map(item => parseInt(item));
        } else {
            dist = line.split(/\s/).map(item => parseInt(item));
        }

        curLine++;
    })
    .on("close", () => solve())

function solve() {
    let l = 0;
    let r = 1;
    let ans = 0;
    let len = dist.length;

    for (l = 0; l < dist.length; l++) {
        while (r < len && dist[r] - dist[l] <= k) {
            r++;
        }

        ans += len - r;
    }

    console.log(ans);
}