SELECT students.name as student, sum(duration)::float / count(*) as average_assignment_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE students.end_date IS NULL
GROUP BY students.id
ORDER BY average_assignment_duration DESC;