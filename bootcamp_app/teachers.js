const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN students ON students.id = student_id
JOIN cohorts ON students.cohort_id = cohorts.id
JOIN teachers ON teachers.id = teacher_id
WHERE cohorts.name = '${args[0]}'
ORDER BY teachers.name;`)
.then(res => {
  res.rows.forEach(teacherObj => {
    console.log(`${teacherObj.cohort}: ${teacherObj.teacher}`)
  })
})