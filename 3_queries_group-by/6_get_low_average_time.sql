SELECT students.name as student, sum(assignment_submissions.duration)::float / count(*) as average_assignment_duration, sum(assignments.duration)::float / count(*) as average_estimated_duration
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
JOIN assignments ON assignments.id = assignment_submissions.assignment_id
WHERE students.end_date IS NULL
GROUP BY students.id
HAVING sum(assignment_submissions.duration)::float / count(*) < sum(assignments.duration)::float / count(*) 
ORDER BY average_assignment_duration;