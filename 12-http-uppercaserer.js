/*
 # LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP UPPERCASERER (Exercise 12 of 13)

  Create a file named http-uppercaserer.js.

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/

'use strict'
const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('Please send POST\n')
    }
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))