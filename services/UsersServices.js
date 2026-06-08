import Users from "../models/Users.model";
import db from "../db/data";


// ajouter un utilisateurs
function addUser(name, role) {
    db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`)
    .run(name, role);
}

// supprimer un utilisateurs
function deleteUser(id) {
    db.prepare(`DELETE FROM users WHERE id=?`)
    .run(id);
}

// Lister un utilisateur
function listerUser(id){
    db.prepare(`SELECT FROM users id = ?`).get(id)
    .run(id)
}



// Selectionner toutes la liste des utilisateurs
function listerUser(users){
    db.prepare(`SELECT FROM users = ?`).all()
}

export{addUser, deleteUser, listerUser};