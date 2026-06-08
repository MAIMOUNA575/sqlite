import Grades from "../models/GradesModel";
import db from "../db/data";


// ajouter une note
function addgrades(student_id, subject_id, note) {
    db.prepare(`INSERT INTO notes(student_id, subject_id, note) VALUES (?, ?, ?)`)
    .run(student_id, subject_id, note);
}


// modifier une note
function updategrades(student_id, subject_id, note) {
    db.prepare(`UPDATE notes SET note = ? WHERE student_id = ? AND subject_id = ?`)
    .run(note, student_id, subject_id);
}


// supprimer une note
function deletegrades(student_id, subject_id, note) {
    db.prepare(`DELETE FROM notes WHERE student_id = ? AND subject_id = ?`)
    .run(student_id, subject_id);
}
export{addgrades, updategrades, deletegrades};