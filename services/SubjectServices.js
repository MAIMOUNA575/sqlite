import db from 'better-sqlite3';


// ajouter un sujet
function addSubject(nom, teacher_id) {
    db.prepare(`INSERT INTO subjets(nom, teacher_id) VALUES (?, ?)`).run(nom, teacher_id);
}
module.exports = {addSubject};

// modifier un sujet
function updateSubject(nom, teacher_id) {
    db.prepare(`UPDATE subjets SET teacher_id = ? WHERE nom = ?`)
    .run(teacher_id, nom);
}
module.exports = {updateSubject};

// supprimer un sujet
function deleteSubject(nom) {
    db.prepare(`DELETE FROM subjets WHERE nom = ?`).run(nom);
}
module.exports = {deleteSubject};


