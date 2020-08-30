/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## BABY STEPS (Exercise 2 of 13)

 Create a file named baby-steps.js.

 Write a program that accepts one or more numbers as command-line arguments
 and prints the sum of those numbers to the console (stdout).
*/

'use strict'

let sum = 0;
for (let i = 2; i < process.argv.length; i++)
    sum += Number(process.argv[i])
console.log(sum)