const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "note content",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "removes the note",
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => {
    notes.removeNote(argv.title)
  }
});

yargs.command({
  command: "list",
  describe: "lists out the notes",
  handler: () => {
    console.log("lists of notes");
  }
});

yargs.command({
  command: "read",
  describe: "reads the note",
  handler: () => {
    console.log("reads a note");
  }
});

yargs.parse();
