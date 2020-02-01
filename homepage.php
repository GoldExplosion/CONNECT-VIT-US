<!doctype html>  
<html>  
<head>  
<title>Connect</title>  
<style> 
@import url('https://fonts.googleapis.com/css?family=Abel|Abril+Fatface|Alegreya|Arima+Madurai|Dancing+Script|Dosis|Merriweather|Oleo+Script|Overlock|PT+Serif|Pacifico|Playball|Playfair+Display|Share|Unica+One|Vibur');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
background-attachment: fixed;
  background-repeat: no-repeat;

    font-family: 'Vibur', cursive;
    font-family: 'Abel', sans-serif;
opacity: .95;
}
h1,h2{
	text-align:center;
	font-size: 250%;
}
a { text-decoration: none; }
.f{font-family:"Times New Roman";
}
</style>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}


.slideshow-container {
  max-width: 300px;
  position: relative;
  margin: auto;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}


.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  padding: 100px;
  font-size:20px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
img{
	border-radius:50%;
}
</style>
<h1> <img src="img19.png" alt="Avatar" style="width:100px" style="height:200px"><a href="http://localhost/pro/login/homepage.php">CONNECT</a></h1>
<h2><font color="violet" class="f">A place to connect</font></h2><hr color="purple">
</head>
<body>

<br><br>
<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 4</div>
  <img src="img6.jpg" style="width:100%">
</div>
<div class="mySlides fade">
  <div class="numbertext">2 / 4</div>
  <img src="img12.jpg" style="width:100%">
</div>
<div class="mySlides fade">
  <div class="numbertext">3 / 4</div>
  <img src="img9.jpg" style="width:100%">
</div>
<div class="mySlides fade">
  <div class="numbertext">4 / 4</div>
  <img src="img14.jpg" style="width:100%">
</div>
</div>
<br>

<div style="text-align:center">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span>
  <span class="dot"></span>  
</div>
<br><br>
<hr color="purple">
<div class="grid-container">
  <div class="grid-item"><font color="violet">Already have an account?</font></div>
  <div class="grid-item"><font color="violet">Don't have an account?</font></div>
  <div class="grid-item"><img src="img1.jpg"></div>
  <div class="grid-item"><img src="img16.jpg"></div>
  <div class="grid-item"><a href="http://localhost/pro/login/login2.php">Login Here</a></div>
  <div class="grid-item"><a href="http://localhost/pro/login/register2.php">Register Here</a></div>
</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}
</script>
<tr></tr>
<tr></tr>

</body>
</html>	