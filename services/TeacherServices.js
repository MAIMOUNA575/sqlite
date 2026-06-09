import Teachers from "../models/TeachersModel";
import db from "../db/data";


// ajouter un professeurs 
function addTeacher(name, matiere) {
    db.prepare(`INSERT INTO teachers(name, matiere) VALUES (?, ?)`).run(name, matiere);
}


// modifier un professeurs
function updateTeacher(matiere, name ,id) {
    db.prepare(`UPDATE teachers SET matiere = ?, name = ? WHERE id = ?`)
    .run(matiere, name, id);
}


// supprimer un professeurs 
function deleteTeacher(name) {
    db.prepare(`DELETE FROM teachers WHERE name = ?`).run(name);
}


// rechercher un professeur
function rechercheTeacher(id){
    return db.prepare(`SELECT * FROM teachers WHERE id = ?`).get(id)
}
export{addTeacher, updateTeacher, deleteTeacher, rechercheTeacher};