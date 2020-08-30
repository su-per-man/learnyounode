/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP CLIENT (Exercise 7 of 13)

  Create a file named http-client.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).

  */
'use strict'

const http = require('http')

http.get(process.argv[2], (resp) => {

    resp.setEncoding("utf-8")

    resp.on('error', (err) => {
        console.error(err)
    })
    resp.on('data', (chunk) => {
        console.log(chunk)
    })
})