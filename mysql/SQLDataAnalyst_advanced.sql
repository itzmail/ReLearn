/*
 * 1. Advanced SQL Tutorial | CTE (Common Table Expression)
 * https://www.youtube.com/watch?v=K1WeoKxLZ5o&list=PPSV
*/

show databases;

use SQLDataAnalyst;

WITH CTE_emp_mstr as (
SELECT emp_first_name, emp_last_name, emp_salary, 
	COUNT(emp_gender) OVER (PARTITION BY emp_gender) AS TotalGender, 
	AVG(emp_salary) OVER (PARTITION BY emp_salary) as AverageSalary 
	FROM emp_mstr em JOIN emp_slr es ON em.emp_id = es.emp_id 
	WHERE es.emp_salary > '45000'
)

SELECT emp_first_name, AverageSalary FROM CTE_emp_mstr;

-- untuk menaj

/*
 * CTE adalah singkatan dari Common Table Expression. 
 * CTE adalah sebuah subquery yang didefinisikan di dalam sebuah query dan dapat digunakan kembali dalam query yang sama1
 */

/*
 * 2. Advanced SQL Tutorial | Temp Tables
 * https://www.youtube.com/watch?v=RF0LE3hYFrI&list=PPSV
 */

/*
 Temporary table adalah tabel yang dibuat sementara pada saat menjalankan query SQL dan 
 dapat digunakan untuk menyimpan hasil sementara yang diakses berulang kali12
*/


CREATE TEMPORARY TABLE temp_emp(
	emp_mstr_id int,
	emp_jobtitle VARCHAR(100),
	emp_slr int
)

insert into temp_emp 
values (1001, 'Salesman', 45000),
(1002, 'Receptionist', 36000),
(1003, 'Salesman', 63000),
(1004, 'Accountant', 47000),
(1005, 'HR', 50000),
(1006, 'Regional Manager', 65000),
(1007, 'Supplier Relations', 41000),
(1008, 'Salesman', 48000),
(1009, 'Accountant', 42000);

insert into temp_emp
values (1010, 'Sales Mantap', 4300)

DROP TABLE temp_emp;

SELECT * FROM temp_emp;


-- Kita bisa memasukkan data temporary dari table yang tersedia
INSERT INTO temp_emp
SELECT * FROM emp_slr

SELECT * FROM emp_slr

-- Lebih Advance

DROP TABLE IF EXISTS temp_emp_slr;
CREATE TEMPORARY TABLE temp_emp_slr (
  job_title VARCHAR(50),
  emp_per_job INT,
  avg_age INT,
  avg_salary INT
);

INSERT INTO temp_emp_slr
SELECT emp_job_title, COUNT(emp_job_title), AVG(emp_age), AVG(emp_salary)
FROM emp_slr es JOIN emp_mstr em ON es.emp_id = em.emp_id
GROUP BY emp_job_title;

SELECT * FROM temp_emp_slr;

/*
 * Advanced SQL Tutorial | String Functions + Use Cases
 * https://www.youtube.com/watch?v=GQj6_6V_jVA&list=PPSV 
 */

DROP TABLE IF EXISTS emp_errors;

CREATE TABLE emp_errors(
	emp_err_id VARCHAR(50),
	emp_first_name VARCHAR(50),
	emp_last_name VARCHAR(50)
)

INSERT INTO emp_errors VALUES 
('1001', 'Jimbo', 'Helbert'),
('     1002', 'Pamela', 'Basely'),
('1003', 'Toby', 'Finderson - Fired');

SELECT * FROM emp_errors

-- TRIM, LTRIM, RTRIM

SELECT emp_err_id, TRIM(emp_err_id) as IDTRIM FROM emp_errors

SELECT emp_err_id, LTRIM(emp_err_id) as IDLTRIM FROM emp_errors;

SELECT emp_err_id, RTRIM(emp_err_id) as IDRTRIM FROM emp_errors;

-- REPLACE

SELECT emp_last_name, REPLACE(emp_last_name, '- Fired', '') as LastNameFixed FROM emp_errors;

-- SUBSTRING

SELECT TRIM(emp_err_id) as id, SUBSTRING(emp_first_name, 1, 3) as NewString from emp_errors ee;

SELECT ee.emp_first_name, SUBSTRING(ee.emp_first_name, 1, 3), em.emp_first_name, SUBSTRING(em.emp_first_name, 1, 3)  FROM emp_errors ee 
JOIN emp_mstr em ON SUBSTRING(em.emp_first_name, 1, 3) = SUBSTRING(ee.emp_first_name, 1, 3)  

-- UPPER AND LOWER

SELECT em.emp_first_name, UPPER(em.emp_first_name), em.emp_last_name, LOWER(em.emp_last_name) FROM emp_mstr em 

/*
 * Advanced SQL Tutorial | Stored Procedures + Use Cases
 * https://www.youtube.com/watch?v=NrBJmtD0kEw&list=PPSV
 */

CREATE PROCEDURE TEST()
BEGIN
	SELECT * FROM emp_mstr;
END;

CALL TEST()

use SQLDataAnalyst

CREATE PROCEDURE TESTPARAM(IN employee_id INT)
BEGIN
	SELECT * FROM emp_mstr WHERE emp_id = employee_id;
END

CALL TESTPARAM(1003);

/*
 * Advanced SQL Tutorial | Subqueries
 * https://www.youtube.com/watch?v=m1KcNV-Zhmc&list=PPSV
 */

SELECT * FROM emp_slr es 

-- Select with SubQuery

SELECT emp_id, emp_salary, (SELECT AVG(emp_salary) FROM emp_slr) AS AllAvgSalary
FROM emp_slr es 

-- Cara lain menggunakan partition by

SELECT emp_id, emp_salary, AVG(emp_salary) over() AS AllAvgSalary
FROM emp_slr;

-- Why Group by doesn't work

SELECT emp_id, emp_salary, AVG(emp_salary) as AllAvgSalary
FROM emp_slr es
GROUP BY emp_id, emp_salary
-- Karena ketika kita memerintahkan AVG hal tersebut tidak bisa dihitung rata-ratanya, jadi seperti itu kita perlu SubQuery

SELECT a.emp_id, AllAvgSalary
FROM (SELECT emp_id, emp_salary, AVG(emp_salary) over() AS AllAvgSalary
FROM emp_slr) a

-- SubQuery WHERE STATEMENT 

SELECT emp_id, emp_job_title, emp_salary, AVG(emp_salary) over () AS AllAvgSalary 
FROM emp_slr es
WHERE emp_id in (
	SELECT emp_id 
	FROM emp_mstr em
	WHERE em.emp_age > 30
)