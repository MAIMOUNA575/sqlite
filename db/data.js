import Database from 'better-sqlite3';




const db = new Database('data.db');
const Matable2 = `
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
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
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL
    )
`;
db.exec(Matabble1);
const execution1 = db.prepare(`INSERT INTO users (name, role) VALUES (?, ?)`);
execution1.run('Mouna', 'Etudiante');








const Matabble3 =`
    CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        matiere TEXT NOT NULL
    )
`;
db.exec(Matabble3);
const execution3 =db.prepare(`INSERT INTO teachers(name, matiere) VALUES (?, ?)`);
execution3.run('Regis', 'Maths');







const Matabble4 = `
    CREATE TABLE IF NOT EXISTS subjects(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nom TEXT NOT NULL,
        teacher_id INTEGER NOT NULL,
        FOREIGN KEY (teacher_id) REFERENCES teachers(id)
    )
`;
db.exec(Matabble4);
const execution4 = db.prepare(`INSERT INTO subjects (nom, teacher_id) VALUES (?, ?)`);
execution4.run('Mouna', '1');







const madate = new Date().toISOString().slice(0, 19).replace('T', ' ');


const Matabble5 = `
    CREATE TABLE IF NOT EXISTS absences(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        FOREIGN KEY (student_id) REFERENCES students(id),
        date TEXT NOT NULL,
        status TEXT NOT NULL
    )
`;
db.exec(Matabble5);
const execution5 = db.prepare(`INSERT INTO absences (student_id, date, status) VALUES (?, ?, ?)`);
execution5.run(1, madate, 'Etudiant');