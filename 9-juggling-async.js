/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## JUGGLING ASYNC (Exercise 9 of 13)

  Create a file named juggling-async.js.

  This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/
'use strict'

const http = require('http')
let processList = []
for (let i = 2; i < process.argv.length; i++)
    processList.push(
        new Promise((resolve, reject) => {
            http.get(process.argv[i], (resp) => {
                resp.setEncoding('utf-8')
                resp.on('error', reject)
                let rawData = ''
                resp.on('data', (chunk) => {
                    rawData += chunk
                })
                resp.on('end', () => {
                    resolve(rawData)
                })
            })
        })
    )

Promise.all(processList).then((allResponse) => {
    allResponse.forEach((data) => {
        console.log(data)
    })
})