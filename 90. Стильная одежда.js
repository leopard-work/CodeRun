const readline = require("readline");
const fs = require("fs");
const path = require("path");

let curLine = 0;
let arr1 = null;
let arr2 = null;


readline
    .createInterface({
        input: fs.createReadStream(path.join(__dirname, "input.txt"))
    })
    .on("line", line => {
        switch (curLine) {
            case 1: {
                arr1 = line.split(/\s/).map(item => parseInt(item));
                break;
            }
            case 3: {
                arr2 = line.split(/\s/).map(item => parseInt(item));
                break;
            }
        }

        curLine++;
    })
    .on("close", () => solve())

function solve() {
    let l = 0;
    let r = 0;
    let diff = Number.POSITIVE_INFINITY;
    let ans = [0, 0];

    while (l < arr1.length && r < arr2.length) {
        if (arr1[l] === arr2[r]) {
            ans[0] = arr1[l];
            ans[1] = arr2[r];
            break;
        }

        let tmp = Math.abs(arr1[l] - arr2[r]);

        if (tmp < diff) {
            diff = tmp;
            ans[0] = arr1[l];
            ans[1] = arr2[r];
        }

        if (arr2[r] < arr1[l]) {
            r++;
        } else {
            l++;
        }
    }

    console.log(ans.join(' '));
}