SELECT cohorts.name AS cohort_name, count(*) AS student_count
FROM cohorts JOIN students ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count(*) >= 18
ORDER BY count(*), cohorts.name;