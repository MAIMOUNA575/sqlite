import Database from 'better-sqlite3'

const db = new Database('data.db')

const Matabble2 = `
    CREATE TABLE students (
        id INTEGER PRIMARY KEY,
        matricule TEXT,
        nom TEXT,
        prenom TEXT,
        age INTEGER,
        classe TEXT
    )
`;


db.exec(Matabble2)



const execution2 = db.prepare(`INSERT INTO students(matricule, nom, prenom, age, classe) VALUES (?, ?, ?, ?, ?)`)



execution2.run('15037' ,'Campbell', 'docteur', '12', 'TleA')


const rows = db.prepare('SELECT * FROM students').all();

console.log(rows);











const db = new Database('app.db')


const Matabble1 =`
    CREATE TABLE user (
        id INTERGER PRIMARY KEY,
        name STRING NOT NULL,
        role STRING NOT NULL,
    )
`;













































// import Database from 'better-sqlite3'

// const db = new Database('app.db')

// const Matabble1 =`
//     CREATE TABLE user (
//         id INTERGER PRIMARY KEY,
//         name STRING NOT NULL,
//         role STRING NOT NULL,
//     )
// `;
// const Matabble2 =`
//     CREATE TABLE students (
//         id INTERGER PRIMARY KEY,
//         matricule STRING NOT NULL,
//         nom STRING NOT NULL,
//         prenom STRING NOT NULL,
//         age STRING NOT NULL,
//         classe STRING NOT NULL,
//     )
// `;
// const Matabble3 =`
//     CREATE TABLE teachers (
//         id INTERGER PRIMARY KEY,
//         name STRING NOT NULL,
//         matiere STRING NOT NULL,
//     )
// `;

// db.exec(Matabble1)
// db.exec(Matabble2)
// db.exec(Matabble3)


// const execution1 =db.prepare(`INSERT INTO users(name, role) VALUE (?, ?, ?)`)

// const execution2 =db.prepare(`INSERT INTO students(matricule, name, prenom, age, classe) VALUE (?, ?, ?, ?, ?, ?)`)

// const execution3 =db.prepare(`INSERT INTO teachers(name, matiere) VALUE (?, ?, ?)`)


// execution1.run('Mouna', 'Etudiante')

// execution2.run('15037' ,'Campbell', 'docteur', '12', 'TleA')

// execution3.run('Regis', 'Maths')

// const rows = db.prepare('SELECT ')