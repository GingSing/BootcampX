const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let args = process.argv.slice(2);

let cohortName = args[0];
let maxResults = args[1];

pool.query(`
SELECT students.id, students.name, cohort_id
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohortName}%'
LIMIT ${maxResults};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
  })
});
