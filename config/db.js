import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'u169578222_meeve',
  password: 'MeeveCIM1@',
  database: 'u169578222_meeve',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
