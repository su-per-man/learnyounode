/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## MY FIRST ASYNC I/O! (Exercise 4 of 13)

 Create a file named my-first-async-io.js.

 Write a program that uses a single asynchronous filesystem operation to
 read a file and print the number of newlines it contains to the console
 (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument.
 */
'use strict'

const fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err == null)
        console.log(data.split('\n').length - 1);
})