import db from 'better-sqlite3';


// ajouter un utilisateurs
function addUser(name, role) {
    db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`).run(name, role);
}
module.exports = {addUser};

// modifier un utilisateurs
function updateUser(name, role) {
    db.prepare(`UPDATE users SET role = ? WHERE name = ?`)
    .run(role, name);
}
module.exports = {updateUser};

// supprimer un utilisateurs
function deleteUser(name) {
    db.prepare(`DELETE FROM users WHERE name = ?`).run(name);
}
module.exports = {deleteUser};
