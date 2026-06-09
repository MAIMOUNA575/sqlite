import Students from "../models/StudentsModel";
import db from "../db/data";



// ajouter un etudiant
function addStudent(matricule, nom, prenom, age, classe) {
    db.prepare(`INSERT INTO students (matricule, nom, prenom, age, classe) VALUES (?, ?, ?, ?, ?)`)
    .run(matricule, nom, prenom, age, classe);
}


// modifier un etudiant
function updateStudent(matricule, nom, prenom, age, classe) {
    db.prepare(`UPDATE students SET nom = ?, prenom = ?, age = ?, classe = ? WHERE matricule = ?`)
    .run(nom, prenom, age, classe, matricule);
}


// supprimer un etudiant
function deleteStudent(id) {
    db.prepare(`DELETE FROM students WHERE id = ?`)
    .run(id);
}  


// rechercher un etudiant
function rechercheStudent(matricule) {
    return db.prepare(`SELECT * FROM students WHERE matricule = ?`)
    .get(matricule);
}


// lister tous les etudiants
function listerStudent() {
    return db.prepare(`SELECT * FROM students`).all();
}

export {addStudent, updateStudent, deleteStudent, rechercheStudent,listerStudent};
