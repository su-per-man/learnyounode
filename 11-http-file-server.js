/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

 ## HTTP FILE SERVER (Exercise 11 of 13)

  Create a file named http-file-server.js.

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/

'use strict'

const fs = require('fs')
const http = require('http')

const server = http.createServer(function (req, resp) {
    var stream = fs.createReadStream(process.argv[3])
    stream.pipe(resp)
})
server.listen(process.argv[2])