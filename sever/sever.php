<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

<<<<<<< HEAD
$conn =new mysqli('localhost', 'root', '', 'ecd db');

if (isset($_POST['submit'])) {
	// get the post records
	$txtFname = $_POST['txtFname'];
	$txtLname = $_POST['txtLname'];
	$txtEmail = $_POST['txtEmail'];
	$txtGender = $_POST['txtGender'];
	$txtMarital = $_POST['txtMarital'];
	$txtBlood = $_POST['txtBlood'];
	$txtPhone = $_POST['txtPhone'];
	$txtDept = $_POST['txtDept'];
	$txtDoctor = $_POST['txtDoctor'];
	$txtDob = $_POST['txtDob'];
	$txtCountry = $_POST['txtCountry'];
	$txtCity = $_POST['txtCity'];
	$txtStr = $_POST['txtStr'];
	$txtGov = $_POST['txtGov'];
	$txtNation = $_POST['txtNation'];


	// database insert SQL code
	$sql = "INSERT INTO `patientinfo` (`fname`, `lname`, `email`, `gender`, `maritalstatus`, `bloodtype`, `mobile`, `department`, `doctor`, `dob`, `country`, `city`, `street`, `governor`, `nationality`) VALUES ('$txtFname',  '$txtLname', '$txtEmail', '$txtGender', '$txtMarital', '$txtBlood', '$txtPhone', '$txtDept', '$txtDoctor', '$txtDob', '$txtCountry', '$txtCity', '$txtStr', '$txtGov', '$txtNation')";

	// insert in database 
	$rs = mysqli_query($conn, $sql);

	if($rs)
	{
		echo "Contact Records Inserted";
	} else {
		echo "There was an error";
	}
	mysqli_close($conn);
=======
$con = mysqli_connect('127.0.0.1:5501', 'root', '','ecd db');

// get the post records
$txtFname = $_POST['txtFname'];
$txtLname = $_POST['txtLname'];
$txtEmail = $_POST['txtEmail'];
$txtGender = $_POST['txtGender'];
$txtMarital = $_POST['txtMarital'];
$txtBlood = $_POST['txtBlood'];
$txtPhone = $_POST['txtPhone'];
$txtDept = $_POST['txtDept'];
$txtDoctor = $_POST['txtDoctor'];
$txtDob = $_POST['txtDob'];
$txtCountry = $_POST['txtCountry'];
$txtCity = $_POST['txtCity'];
$txtStr = $_POST['txtStr'];
$txtGov = $_POST['txtGov'];
$txtNation = $_POST['txtNation'];


// database insert SQL code
$sql = "INSERT INTO `` (`id`,	`fname`,	`lname`,	`email`,	`gender`,	`maritalstatus`,	`bloodtype`,	`mobile`,	`department`,	`doctor`,	`dob`,	`country`,	`city`,	`street`,	`governor`,	`nationality`) VALUES ('0', '$txtFname',  '$txtLname', '$txtEmail', '$txtGender', '$txtMarital', '$txtBlood', '$txtPhone', '$txtDept', '$txtDoctor', '$txtDob', '$txtCountry', '$txtCity', '$txtStr', '$txtGov', '$txtNation')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
<<<<<<< HEAD
>>>>>>> 5cfa97d (php)
=======
>>>>>>> d008c39e3e6ae6fef6d332068f716598c0503fc8
>>>>>>> 29dc37c113286836bef7c8e026f64a3d311680d9
}

?>