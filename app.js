const fs = require('fs')
const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js');

const command = process.argv[2]

if (command === 'add'){
    console.log('Adding Note')
} if (command === 'remove'){
    console.log('Removing Note')
}

getNotes()