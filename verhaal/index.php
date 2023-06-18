<!DOCTYPE HTML>  
<html>
<head>
	<title>12 Principles of Game Design</title>
	<link rel="icon" type="image/ico" href="/portfolio/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/portfolio/css/style.css">
	<script>
		window.onload = function() {
			document.reset();
		};

		function darkmode() {
			var element = document.body;
			element.classList.toggle("dark");
			var myList = document.getElementsByTagName("blockquote");
			for (i = 0; i < myList.length; i++) {
				myList[i].classList.toggle("block-dark");
			}
		}
	</script>
</head>
<body>  
<?php
// define variables and set to empty values
$fieldErr = $genderErr = "";
$gender = $name = $kleur = $getal = $verhaal = $poppetje = $doei = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") { 

  if (empty($_POST["name"])) {
    $fieldErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["kleur"])) {
    $fieldErr = "Kleur is required";
  } else {
    $kleur = test_input($_POST["kleur"]);
    // check if kleur only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$kleur)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["getal"])) {
    $fieldErr = "getal is required";
  } else {
    $getal = test_input($_POST["getal"]);
    // check if getal only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$getal)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["verhaal"])) {
    $fieldErr = "verhaal is required";
  } else {
    $verhaal = test_input($_POST["verhaal"]);
    // check if verhaal only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$verhaal)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["poppetje"])) {
    $fieldErr = "poppetje is required";
  } else {
    $poppetje = test_input($_POST["poppetje"]);
    // check if poppetje only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$poppetje)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["doei"])) {
    $fieldErr = "Doei is required";
  } else {
    $doei = test_input($_POST["doei"]);
    // check if doei only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$doei)) {
      $fieldErr = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<body class="">
	<div class="header">
		<div class="angle-bottom">
			<div class="wrapper">
				<h1><a  href="/portfolio/">Verhaal</a></h1>
				<p class="subtitle">Verhalengenerator 3000+</p>
			</div>
		</div>
	</div>
	<div class="main">
		<div class="wrapper">
			<form class="form-style-1" action="welcome.php" method="get">
				<h2>Verhaal</h2>
				<p><span class="error">* required field</span></p>
				Ik ben een:
				<input type="radio" name="gender" value="meisje">Meisje
				<input type="radio" name="gender" value="jongetje">Jongetje  
				<span class="error">* </span>
				<br><br>  
				Ik heet: <input type="text" name="name" value="">
				<span class="error">* </span>
				<br><br>
				Mijn lievelingskleur is: <input type="text" name="kleur" value="">
				<span class="error">* </span>
				<br><br>
				Mijn lievelingsgetal is: <input type="text" name="getal" value="">
				<span class="error"></span>
				<br><br>
				Mijn lievelingsverhaal is: <input type="text" name="verhaal" value="">
				<span class="error"></span>
				<br><br>
				Mijn favoriete poppetje daarin is: <input type="text" name="poppetje" value="">
				<span class="error"></span>
				<br><br>
				Als iemand weggaat zeg ik altijd: <input type="text" name="doei" value="">
				<span class="error"></span>
				<br><br>
				<button type="submit" name="submit" style="width:50%">Submit</button>
				<button type="reset" name="reset" style="width:50%;background-color:var(--white);border-color:var(--dark)">Reset</button>
			</form>
		</div>
	</div>
	<div class="footer">	
		<div class="angle-top">
			<div class="wrapper">
				<p class="detail"><a href="/portfolio/about">Over mij</a> | &copy; <script>document.write(new Date().getFullYear());</script> dennisulijn.com | All rights reserved | <a href="mailto:dennisulijn@gmail.com">contact</a></p>
			</div>
		</div>
	</div>

</body>
</html>