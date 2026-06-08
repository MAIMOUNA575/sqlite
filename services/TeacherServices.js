import db from 'better-sqlite3';


// ajouter un professeurs 
function addTeacher(name, matiere) {
    db.prepare(`INSERT INTO teachers(name, matiere) VALUES (?, ?)`).run(name, matiere);
}
module.exports = {addTeacher};

// modifier un professeurs
function updateTeacher(name, matiere) {
    db.prepare(`UPDATE teachers SET matiere = ? WHERE name = ?`)
    .run(matiere, name);
}
module.exports = {updateTeacher};

// supprimer un professeurs 
function deleteTeacher(name) {
    db.prepare(`DELETE FROM teachers WHERE name = ?`).run(name);
}
module.exports = {deleteTeacher};


