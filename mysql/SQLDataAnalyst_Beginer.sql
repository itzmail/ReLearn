show databases;


/*
 * 1. SQL Basics Tutorial For Beginners | Installing SQL Server Management Studio and Create Tables | 1/4 
 * URL https://youtu.be/RSlqWnP-Dy8?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 * */

use SQLDataAnalyst;

create table emp_mstr(
	emp_id int,
	emp_first_name varchar(50),
	emp_last_name varchar(50),
	emp_age int,
	emp_gender varchar(50)
);

create table emp_slr(
	emp_id int,
	emp_job_title varchar(50),
	emp_salary int
);


insert into emp_mstr 
values (1002, 'Pam', 'Beasley', 30, 'Female'),
(1003, 'Dwight', 'Schrute', 29, 'Male'),
(1004, 'Angela', 'Martin', 31, 'Female'),
(1005, 'Toby', 'Flenderson', 32, 'Male'),
(1006, 'Michael', 'Scott', 35, 'Male'),
(1007, 'Meredith', 'Palmer', 32, 'Female'),
(1008, 'Stanley', 'Hudson', 38, 'Male'),
(1009, 'Kevin', 'Malone', 31, 'Male');

insert into emp_slr 
values (1001, 'Salesman', 45000),
(1002, 'Receptionist', 36000),
(1003, 'Salesman', 63000),
(1004, 'Accountant', 47000),
(1005, 'HR', 50000),
(1006, 'Regional Manager', 65000),
(1007, 'Supplier Relations', 41000),
(1008, 'Salesman', 48000),
(1009, 'Accountant', 42000);

select * from emp_mstr;

select * from emp_slr ;

/*
 * 2. SQL Basics Tutorial For Beginners | Select + From Statements | 2/4 
 * URL https://youtu.be/PyYgERKq25I?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 * */

select * from emp_mstr ; 

-- Untuk seleksi nilai yang berbeda
select DISTINCT (emp_gender) from emp_mstr ;

-- Menghitung banyak data pada satu column
select COUNT(emp_last_name) as LastNameCount from emp_mstr;

select * from emp_slr ;

-- Mencari tahu nilai yang tinggi dan rendah
select MAX(emp_salary) from emp_slr ;

select MIN(emp_salary) from emp_slr ;

-- Mencari nilai rata-rata
select AVG(emp_salary) as AverageSalary from emp_slr ;

/*
 * 3. SQL Basics Tutorial For Beginners | Where Statement | 3/4
 * URL https://youtu.be/A9TOuDZTPDU?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 */

select * from emp_mstr 
WHERE emp_first_name <> 'Jim' and emp_gender = 'Male'; -- <> artinya tidak sama dengan

select * from emp_mstr 
where emp_last_name like 'S%o%'

select * from emp_mstr 
where emp_first_name in ('Jim', 'Michael'); -- untuk memilih lebih dari 1 , jadi itu mencari nama depan yang ada jim dan michael


/*
 * 4. SQL Basics Tutorial For Beginners | Group By + Order By Statements | 4/4
 * URL https://youtu.be/LXwfzIRD-Ds?list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF
 */

select * from emp_mstr ;

select emp_gender, emp_age, COUNT(emp_gender) as CountGender
from emp_mstr 
where emp_age > 20
group by emp_gender, emp_age
order by CountGender;

select emp_gender, COUNT(emp_gender) as CountGender
from emp_mstr 
group by emp_gender
order by CountGender desc;

select * from emp_mstr 
order by emp_age desc, emp_gender asc;

-- Bisa juga

select * from emp_mstr 
order by 4 desc, 5 asc; -- 4 itu emp_age dan 5 itu emp_gender