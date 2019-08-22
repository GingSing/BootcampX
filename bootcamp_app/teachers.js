const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name = $1
ORDER BY teachers.name;`;

const values = [process.argv[2]];

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(teacherObj => {
    console.log(`${teacherObj.cohort}: ${teacherObj.teacher}`)
  })
})