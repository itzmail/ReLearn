use SQLDataAnalyst;

show tables;

/*
 * 5. Intermediate SQL Tutorial | Inner/Outer Joins | Use Cases
 * URL https://youtu.be/9URM1_2S0ho?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 */

insert into emp_mstr 
values (1010, 'Ismail', 'Alam', 22, 'Male');

insert into emp_slr 
values (1010, 'HR', 45000);

desc emp_mstr ;
select * from emp_mstr;

desc emp_slr ;
select * from emp_slr;

SELECT emp_mstr.emp_id, emp_first_name, emp_last_name, emp_job_title, emp_salary
FROM emp_mstr 
INNER JOIN emp_slr on emp_mstr.emp_id = emp_slr.emp_id
WHERE emp_first_name <> 'Michael'
ORDER BY emp_salary desc;

SELECT emp_job_title, AVG(emp_salary) as AverageSalary
FROM emp_mstr 
INNER JOIN emp_slr on emp_mstr.emp_id = emp_slr.emp_id
GROUP BY emp_slr.emp_job_title
ORDER BY AverageSalary desc;

-- References table emp_slr ke emp_mstr

-- Membuat emp_id menjadi primary key
alter table emp_mstr 
add constraint pk_emp_id
primary key (emp_id);

--  Membuat table emp_slr menjadi foreign_key
alter table emp_slr 
add constraint fk_emp_id 
foreign key (emp_id)
references emp_mstr(emp_id);

/*
 * 6. Intermediate SQL Tutorial | Unions | Union Operator
 * URL https://youtu.be/lYKkro6rKm0?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 */

create table emp_wh_mstr (
	emp_id int,
	emp_first_name varchar(50),
	emp_last_name varchar(50),
	emp_age int,
	emp_gender varchar(50)
);

show tables;

insert into emp_wh_mstr 
values (1053, 'Mantap', 'Beasley', 30, 'Female'),
(1054, 'Jiwa', 'Schrute', 29, 'Male'),
(1055, 'Josth', 'Martin', 31, 'Female');

SELECT * FROM emp_mstr em
UNION all
SELECT * FROM emp_wh_mstr ;

-- Berhati-hati menggunakan union karena syarat untuk menggunakan union adalah harus memiliki table yang kolomnya sama

/*
 * 7. Intermediate SQL Tutorial | Case Statement | Use Cases
 * https://www.youtube.com/watch?v=Twusw__OzA8&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF&index=9
 */

/*
 * WHEN dan THEN disini seperti IF Else Clause
 */

SELECT emp_first_name, emp_last_name, emp_job_title, emp_salary,
CASE 
	WHEN emp_job_title = 'Salesman' THEN emp_salary + (emp_salary * .10)
	WHEN emp_job_title = 'Accountant' THEN emp_salary + (emp_salary * .05)
	WHEN emp_job_title = 'HR' THEN emp_salary + (emp_salary * .00001)
	ELSE emp_salary + (emp_salary * .03)
END AS salary_bonus
FROM emp_mstr
JOIN emp_slr on emp_mstr.emp_id = emp_slr.emp_id;

SELECT emp_first_name, emp_last_name, emp_age, 
CASE
	WHEN emp_age > 30 THEN 'OLD'
	WHEN emp_age BETWEEN 28 AND 30 THEN 'YOUNG'
	ELSE 'BABY'
END as desc_age
FROM emp_mstr;

/*
 * 8. Intermediate SQL Tutorial | Having Clause
 * https://www.youtube.com/watch?v=tYBOMw7Ob8E&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF&index=10
 */

select * from emp_slr es 

select emp_job_title, COUNT(emp_job_title) as total 
from emp_slr es 
GROUP BY emp_job_title;

/*
 * Klausa HAVING pada SQL digunakan untuk memfilter hasil dari perintah GROUP BY. 
 * Klausa ini digunakan untuk menentukan kondisi untuk memfilter hasil grup mana yang muncul dalam hasil. 
 * Klausa ini disertakan dalam SQL karena kata kunci WHERE gagal saat kami menggunakannya dengan ekspresi agregat.
 */

SELECT emp_job_title, COUNT(emp_job_title) as total
FROM emp_slr es 
GROUP BY emp_job_title 
HAVING (COUNT(emp_job_title) > 1);

SELECT emp_job_title, AVG(emp_salary) as avarage
FROM emp_slr es 
GROUP BY emp_job_title 
HAVING (AVG(emp_salary) > 45000)
ORDER BY AVG(emp_salary) 

/*
 * Kenapa Having clause diletakan di antara Group By dan Order By?
 * Karena Klausa HAVING pada SQL digunakan untuk memfilter hasil dari perintah GROUP BY. Klausa ini digunakan untuk menentukan kondisi untuk memfilter hasil grup mana yang muncul dalam hasil.
 */

/*
 * 10. Intermediate SQL Tutorial | Aliasing
 * https://www.youtube.com/watch?v=Dk7he_yEs4U&list=PPSV
 * 
 * Kegunaan dari aliasing sendiri untuk mempersingkat tulisan kita
 */

SELECT * FROM emp_mstr;

SELECT emp_first_name as FNAME, emp_last_name as BNAME FROM emp_mstr em ;

SELECT emp_first_name + ' ' + emp_last_name AS FullName from emp_mstr;

SELECT AVG(emp_age) as AvgAge from emp_mstr;

SELECT EmployerMaster.emp_first_name  FROM emp_mstr as EmployerMaster

SELECT em.emp_id, es.emp_salary FROM emp_mstr em 
JOIN emp_slr es on em.emp_id = es.emp_id;

/*
 * 11. Intermediate SQL Tutorial | Partition By
 * https://www.youtube.com/watch?v=D6XNlTfglW4&list=PPSV
 */

SELECT emp_first_name, emp_last_name, emp_salary, COUNT(emp_gender) 
FROM emp_mstr em 
JOIN emp_slr es ON em.emp_id = es.emp_id
GROUP BY emp_first_name, emp_last_name, emp_salary, emp_gender

-- Kalau kita pakai SQL di atas maka yang terjadi ialah COUNT gendernya terhitung jadi 1

SELECT emp_first_name, emp_last_name, emp_salary, COUNT(emp_gender) 
OVER (PARTITION BY emp_gender) as TotalGender
FROM emp_mstr em 
JOIN emp_slr es ON em.emp_id = es.emp_id
GROUP BY emp_first_name, emp_last_name, emp_salary, emp_gender

/*
 * Partition by adalah sebuah subklas dari klausa OVER. Klausa PARTITION BY membagi hasil kueri menjadi beberapa partisi. 
 * Fungsi window dioperasikan pada setiap partisi secara terpisah dan dihitung ulang untuk setiap partisi
 */