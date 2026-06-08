import db from 'better-sqlite3';


// ajouter un etudiant
function addStudent(matricule, nom, prenom, age, classe) {
    db.prepare(`INSERT INTO students (matricule, nom, prenom, age, classe) VALUES (?, ?, ?, ?, ?)`).run(matricule, nom, prenom, age, classe);
}
module.exports = {addStudent};

// modifier un etudiant
function updateStudent(matricule, nom, prenom, age, classe) {
    db.prepare(`UPDATE students SET nom = ?, prenom = ?, age = ?, classe = ? WHERE matricule = ?`)
    .run(nom, prenom, age, classe, matricule);
}
module.exports = {updateStudent};

// supprimer un etudiant
function deleteStudent(matricule) {
    db.prepare(`DELETE FROM students WHERE matricule = ?`).run(matricule);
}  
module.exports = {deleteStudent};



