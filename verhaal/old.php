<!DOCTYPE HTML>  
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
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

<h2>Verhaal</h2>
<p><span class="error">* required field</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
  Ik ben een:
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="meisje") echo "checked";?> value="meisje">Meisje
  <input type="radio" name="gender" <?php if (isset($gender) && $gender=="jongetje") echo "checked";?> value="jongetje">Jongetje  
  <span class="error">* <?php echo $genderErr;?></span>
  <br><br>  
  Ik heet: <input type="text" name="name" value="<?php echo $name;?>">
  <span class="error">* <?php echo $fieldErr;?></span>
  <br><br>
  Mijn lievelingskleur is: <input type="text" name="kleur" value="<?php echo $kleur;?>">
  <span class="error">* <?php echo $emailErr;?></span>
  <br><br>
  Mijn lievelingsgetal is: <input type="text" name="getal" value="<?php echo $getal;;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Mijn lievelingsverhaal is: <input type="text" name="verhaal" value="<?php echo $verhaal;;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Mijn favoriete poppetje daarin is: <input type="text" name="poppetje" value="<?php echo $poppetje;;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  Als iemand weggaat zeg ik altijd: <input type="text" name="doei" value="<?php echo $doei;;?>">
  <span class="error"><?php echo $websiteErr;?></span>
  <br><br>
  <input type="submit" name="submit" value="Verhaal maken">
  <input type="reset" name="Reset" value="Opnieuw beginnen">
</form>

<?php
echo "<h2>Dit verhaal heb jij verzonnen:</h2>";
echo "er was eens een ";
echo $gender;
echo " genaamd ";
echo $name;
echo ". ";
echo $name;
echo " verveelde zich een beetje. Wat kon ";
echo $name;
echo " nou toch verzinnen? Links was niks te zien, rechts was niets... Maar wat was dat nou daar in verte!? <br><br>Het was een ";
echo $poppetje;
echo "! Wat zeg ik? 1 ";
echo $poppetje;
echo "!? Het waren er wel ";
echo $getal;
echo "! ";
echo $name;
echo " kon het niet geloven. ";
echo $verhaal;
echo " was nu overal aanwezig! <br><br>En het werd nog mooier!";
echo $poppetje;
echo "werd helemaal ";
echo $kleur;
echo "! <br><br>Helaas, het werd al laat. ";
echo $poppetje;
echo " rende snel weg en riep nog net ";
echo $doei;
echo " . ";
echo $name;
echo " kon nog net ";
echo $doei;
echo " terugroepen voordat ";
echo $poppetje;
echo " uit het zicht verdween. <br><br> ";
echo $name;
echo " werd ook al moe en ging slapen. <br><br> "; 
echo  $doei;
echo "!"
?>

</body>
</html>