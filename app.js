const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    handler: () => {
        console.log('Adds a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes the note',
    handler: () => {
        console.log('removes a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'lists out the notes',
    handler: () => {
        console.log('lists of notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'reads the note',
    handler: () => {
        console.log('reads a note')
    }
})

console.log(yargs.argv)