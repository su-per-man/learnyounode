/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## MY FIRST I/O! (Exercise 3 of 13)

 Create a file named my-first-io.js.

 Write a program that uses a single synchronous filesystem operation to
 read a file and print the number of newlines (\n) it contains to the
 console (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument (i.e., process.argv[2]). You do not need to make
 your own test file.
*/

'use strict'

const fs = require('fs')
let bufferObj = fs.readFileSync(process.argv[2], 'utf8', callb())
console.log(bufferObj.toString().split('\n').length - 1)

function callb(err, daa) {
    if (err != '')
        console.log(daa)
}