import Users from "../models/Users.model";
import db from "../db/data";


// ajouter un utilisateurs
function addUser(name, role) {
    db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`)
    .run(name, role);
}


// modifier un utilisateurs
function updateUser(name, role) {
    db.prepare(`UPDATE users SET role = ? WHERE name = ?`)
    .run(role, name);
}


// supprimer un utilisateurs
function deleteUser(name) {
    db.prepare(`DELETE FROM users WHERE name = ?`)
    .run(name);
}
export{addUser, updateUser, deleteUser};