<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

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
}

?>