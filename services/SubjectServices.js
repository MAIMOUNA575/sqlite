import Subjects from "../models/SubjectModels";
import db from "../db/data";


// ajouter un sujet
function addSubject(nom, teacher_id) {
    db.prepare(`INSERT INTO subjects(nom, teacher_id) VALUES (?, ?)`).run(nom, teacher_id);
}


// lister un sujet 
function listerSubject(id){
    return db.prepare(`SELECT * FROM subjects WHERE id = ?`).get(id)
}


// affecter un professeur a une matiere
function affecteSubject(id, teacher_id){
    db.prepare(`UPDATE subjects SET teacher_id = ? WHERE id = ?`)
    .run(teacher_id, id);
}

export{addSubject, listerSubject, affecteSubject};