<html>
<head>
	<title>12 Principles of Game Design</title>
	<link rel="icon" type="image/ico" href="/portfolio/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="/portfolio/css/style.css">
</head>
<body>


<div class="header">
		<div class="angle-bottom">
			<div class="wrapper">
				<h1><a  href="/portfolio/">Jouw verhaal</a></h1>
				<p class="subtitle">Verhalengenerator 3000+</p>
			</div>
		</div>
	</div>
	<div class="main">
		<div class="wrapper">
<div class="form-style-1">
<?php
echo "<p class=\"opening\">De antwoorden die jij op de vorige pagina hebt gegeven, zorgen voor dit verhaal:</p>";
echo "er was eens een ";
echo $_GET["gender"];
echo " genaamd ";
echo $_GET["name"];
echo ". ";
echo $_GET["name"];
echo " verveelde zich een beetje. Wat kon ";
echo $_GET["name"];
echo " nou toch verzinnen? Links was niks te zien, rechts was niets... Maar wat was dat nou daar in verte!? <br><br>Het was een ";
echo $_GET["poppetje"];
echo "! Wat zeg ik? 1 ";
echo $_GET["poppetje"];
echo "!? Het waren er wel ";
echo $_GET["getal"];
echo "! ";
echo $_GET["name"];
echo " kon het niet geloven. ";
echo $_GET["verhaal"];
echo " was nu overal aanwezig! <br><br>En het werd nog mooier!";
echo $_GET["poppetje"];
echo " werd helemaal ";
echo $_GET["kleur"];
echo "! <br><br>Helaas, het werd al laat. ";
echo $_GET["poppetje"];
echo " rende snel weg en riep nog net ";
echo $_GET["doei"];
echo ". ";
echo $_GET["name"];
echo " kon nog net '";
echo $_GET["doei"];
echo "' terugroepen voordat ";
echo $_GET["poppetje"];
echo " uit het zicht verdween. <br><br> ";
echo $_GET["name"];
echo " werd ook al moe en ging slapen. <br><br> "; 
echo  $_GET["doei"];
echo "!<br><br>"
?>
<button type="button" style="width:50%" onClick="window.location.href='https://dennisulijn.com/portfolio/verhaal/'"/>Terug</button>
</div>
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