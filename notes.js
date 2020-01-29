const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  console.log("This is a note");
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green("Note added!"));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green("Removed note!"));
  } else {
    console.log(chalk.red("No note removed!"));
  }
  saveNotes(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach(note => console.log(chalk.green(note.title)));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title);

  if(noteToRead){
    console.log(chalk.green(`Title: ${noteToRead.title}`))
    console.log(chalk.inverse(`Body: ${noteToRead.body}`))
  } else {
    console.log(chalk.red('No note found'))
  }

}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    const parsedData = JSON.parse(dataJson);
    return parsedData;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
