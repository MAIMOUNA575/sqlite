import Grades from "../models/GradesModel";
import db from "../db/data";


// ajouter une note (entre 0 et 20)
function addgrades(student_id, subject_id, note) {
    if(note<0 || note>20){
        console.error('la note doit etre comprise entre 0 et 20.')
        return false;
    }

    db.prepare(`INSERT INTO grades(student_id, subject_id, note) VALUES (?, ?, ?)`)
    .run(student_id, subject_id, note);
    return true
}


// modifier une note
function updategrades(student_id, subject_id, note) {
    db.prepare(`UPDATE grades SET note = ? WHERE student_id = ? AND subject_id = ?`)
    .run(note, student_id, subject_id);
}


// supprimer une note
function deletegrades(student_id, subject_id) {
    db.prepare(`DELETE FROM grades WHERE student_id = ? AND subject_id = ?`)
    .run(student_id, subject_id);
}


// calculer la moyenne d'un etudiant
function calculegrade(note){
    return db.prepare(`SELECT *FROM grades WHERE note = ?`)
    .run(note/subject_id.length)
}

export{addgrades, updategrades, deletegrades, calculegrade};