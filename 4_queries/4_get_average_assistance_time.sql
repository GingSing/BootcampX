SELECT sum(completed_at - started_at)/count(*) as average_assistance_request_duration
FROM assistance_requests