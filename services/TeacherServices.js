import Teachers from "../models/TeachersModel";
import db from "../db/data";


// ajouter un professeurs 
function addTeacher(name, matiere) {
    db.prepare(`INSERT INTO teachers(name, matiere) VALUES (?, ?)`).run(name, matiere);
}


// modifier un professeurs
function updateTeacher(name, matiere) {
    db.prepare(`UPDATE teachers SET matiere = ? WHERE name = ?`)
    .run(matiere, name);
}


// supprimer un professeurs 
function deleteTeacher(name) {
    db.prepare(`DELETE FROM teachers WHERE name = ?`).run(name);
}
export{addTeacher, updateTeacher, deleteTeacher};