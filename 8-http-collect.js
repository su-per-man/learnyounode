/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP COLLECT (Exercise 8 of 13)

  Create a file named http-collect.js.

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/
'use strict'

const http = require('http')

http.get(process.argv[2], (resp) => {
    resp.setEncoding('utf-8')
    resp.on('error', console.error)
    let rawdata = ''
    resp.on('data', (chunk) => {
        rawdata += chunk
    })
    resp.on('end', () => {
        console.log(rawdata.length + "\n" + rawdata)
    })
})