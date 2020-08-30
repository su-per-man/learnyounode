'use strict'

const fs = require('fs')
const path = require('path')

module.exports = (dir, ext, callb) => {

    fs.readdir(dir, (err, data) => {
        if (err) { return callb(err) }
        const filteredFiles = data.filter((file) => {
            return path.extname(file) === '.' + ext;
        });
        callb(null, filteredFiles)
    })
}


