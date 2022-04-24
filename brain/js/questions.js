// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'What is the full form of SQL?',
	'Structured Query List',
	'Structure Query Language',
	'Sample Query Language',
	'None of these',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Which of the following is not a DDL command?',
	'TRUNCATE',
	'ALTER',
	'CREATE',
	'UPDATE',
	4,
	0
);

// Question 3
var q3 = new CQuiz(
	'Which of the following are TCL commands?',
	'COMMIT and ROLLBACK',
	'UPDATE and TRUNCATE',
	'SELECT and INSERT',
	'GRANT and REVOKE',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Which statement is used to delete all rows in a table without having the action logged?',
	'DELETE',
	'REMOVE',
	'DROP',
	'TRUNCATE',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Which of the following is not Constraint in SQL?',
	'Primary Key',
	'Not Null',
	'Check',
	'Union',
	4,
	0
);

// Question 6
var q6 = new CQuiz(
	'Which of the following is not a valid aggregate function?',
	'COUNT',
	'COMPUTE',
	'SUM',
	'MAX',
	2,
	0
);

// Question 7
var q7 = new CQuiz(
	'Which of the following statement is correct to display all the cities whose humidity is in the range of 60 to 75 from the "whether" table?',
	'SELECT city FROM weather WHERE humidity IN (60 to 75)',
	'SELECT city FROM weather WHERE humidity BETWEEN 60 AND 75',
	'SELECT city FROM weather WHERE humidity NOT IN (60 AND 75)',
	'SELECT city FROM weather WHERE humidity NOT BETWEEN 60 AND 75',
	2,
	0
);

// Question 8
var q8 = new CQuiz(
	'Which statement is used to get all data from the student table whose name starts with p?',
	'SELECT * FROM student WHERE name LIKE "%p%";',
	'SELECT * FROM student WHERE name LIKE "p%";',
	'SELECT * FROM student WHERE name LIKE "_p%";',
	'SELECT * FROM student WHERE name LIKE "%p";',
	2,
	0
);

// Question 9
var q9 = new CQuiz(
	'How can you change "Thomas" into "Michel" in the "LastName" column in the Users table?',
	'UPDATE User SET LastName = "Thomas" INTO LastName = "Michel"',
	'MODIFY Users SET LastName = "Michel" WHERE LastName = "Thomas"',
	'UPDATE Users SET LastName = "Michel" WHERE LastName = "Thomas"',
	'MODIFY Users SET LastName = "Thomas" INTO LastName = "Michel"',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'Which operator is used to compare a value to a specified list of values?',
	'ANY',
	'BETWEEN',
	'ALL',
	'IN',
	4,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
