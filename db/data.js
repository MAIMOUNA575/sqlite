import Database from 'better-sqlite3';




const db = new Database('data.db');
const Matable2 = `
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY ,
        matricule TEXT NOT NULL UNIQUE,
        nom TEXT NOT NULL,
        prenom TEXT NOT NULL,
        age INTEGER NOT NULL,
        classe TEXT NOT NULL
    )
`;
db.exec(Matable2);
const execution2 = db.prepare(`INSERT INTO students(matricule, nom, prenom, age, classe)VALUES (?, ?, ?, ?, ?)`);
execution2.run('15037', 'Campbell', 'docteur', 12, 'TleC');
execution2.run('49023', 'Coulibaly', 'Mouna', 16, 'TleA');







const Matabble1 = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL
    )
`;
db.exec(Matabble1);
const execution1 = db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`);
execution1.run('Mouna', 'Etudiante');








const Matabble3 =`
    CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        matiere TEXT NOT NULL
    )
`;
db.exec(Matabble3);
const execution3 =db.prepare(`INSERT INTO teachers(name, matiere) VALUES (?, ?)`);
execution3.run('Regis', 'Maths');







const Matabble4 = `
    CREATE TABLE IF NOT EXISTS subjets(
        id INTEGER PRIMARY KEY, 
        nom TEXT NOT NULL,
        teacher_id INTEGER,
        FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    )
`;
db.exec(Matabble4);
const execution4 = db.prepare(`INSERT INTO subjets (nom, teacher_id) VALUES (?, ?)`);
execution4.run('Mouna', 'idTEACH');








const Matabble5 = `
    CREATE TABLE IF NOT EXISTS absences(
        id INTEGER PRIMARY KEY,
        student_id INTEGER NOT NULL UNIQUE,
        date TEXT NOT NULL,
        status TEXT NOT NULL
    )
`;
db.exec(Matabble5);
const execution5 = db.prepare(`INSERT INTO absences (student_id, date, status) VALUES (?, ?, ?)`);
execution5.run(4, '2023-10-10', 'Etudiant');