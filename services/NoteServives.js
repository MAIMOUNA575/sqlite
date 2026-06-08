import db from 'better-sqlite3';


// ajouter une note
function addNote(student_id, subject_id, note) {
    db.prepare(`INSERT INTO notes(student_id, subject_id, note) VALUES (?, ?, ?)`).run(student_id, subject_id, note);
}
module.exports = {addNote};

// modifier une note
function updateNote(student_id, subject_id, note) {
    db.prepare(`UPDATE notes SET note = ? WHERE student_id = ? AND subject_id = ?`)
    .run(note, student_id, subject_id);
}
module.exports = {updateNote};

// supprimer une note
function deleteNote(student_id, subject_id) {
    db.prepare(`DELETE FROM notes WHERE student_id = ? AND subject_id = ?`).run(student_id, subject_id);
}
module.exports = {deleteNote};