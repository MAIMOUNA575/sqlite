import Subjects from "../models/SubjectModels";
import db from "../db/data";


// ajouter un sujet
function addSubject(nom, teacher_id) {
    db.prepare(`INSERT INTO subjets(nom, teacher_id) VALUES (?, ?)`).run(nom, teacher_id);
}


// modifier un sujet
function updateSubject(nom, teacher_id) {
    db.prepare(`UPDATE subjets SET teacher_id = ? WHERE nom = ?`)
    .run(teacher_id, nom);
}


// supprimer un sujet
function deleteSubject(nom) {
    db.prepare(`DELETE FROM subjets WHERE nom = ?`).run(nom);
}
export{addSubject, updateSubject, deleteSubject};


