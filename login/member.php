<?php   
session_start();  
if(!isset($_SESSION["sess_user"])){  
    header("location:login2.php");  
} else {  
?>  
<!doctype html>  
<html>  
<head>  
<title>Welcome</title>  
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
form {
    width: 450px;
    min-height: 500px;
    height: auto;
    border-radius: 5px;
    margin: 2% auto;
    box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
    padding: 2%;
    background-image: linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%);
}
form .con {
    display: -webkit-flex;
    display: flex;
  
    -webkit-justify-content: space-around;
    justify-content: space-around;
  
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  
      margin: 0 auto;
}
header h1{
    margin: 2% auto 10% auto;
    text-align: center;
}
header h2 {
    font-size: 250%;
    font-family: 'Playfair Display', serif;
    color: #3e403f;
}
header p {letter-spacing: 0.05em;}
.input-item {
    background: #fff;
    color: #333;
    padding: 14.5px 0px 15px 9px;
    border-radius: 5px 0px 0px 5px;
}
input[class="form-input"]{
    width: 240px;
    height: 50px;
  
    margin-top: 2%;
    padding: 15px;
    
    font-size: 16px;
    font-family: 'Abel', sans-serif;
    color: #5E6472;
  
    outline: none;
    border: none;
  
    border-radius: 0px 5px 5px 0px;
    transition: 0.2s linear;
    
}
input[id="txt-input"] {width: 250px;}
input:focus {
    transform: translateX(-2px);
    border-radius: 5px;
}
button {
    display: inline-block;
    color: #252537;
  
    width: 280px;
    height: 50px;
  
    padding: 0 20px;
    background: #fff;
    border-radius: 5px;
    
    outline: none;
    border: none;
  
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    
    margin: 7% auto;
    letter-spacing: 0.05em;
}
.submits {
    width: 48%;
    display: inline-block;
    float: left;
    margin-left: 2%;
}
.frgt-pass {background: transparent;}
.sign-up {background: #B8F2E6;}
.button:hover {
    transform: translatey(3px);
    box-shadow: none;
}
.button:hover {
    animation: ani9 0.4s ease-in-out infinite alternate;background-color: skyblue;
}
.button1{
	    display: inline-block;
    color: #252537;
  
    width: 280px;
    height: 50px;
  
    padding: 0 20px;
    background: #fff;
    border-radius: 5px;
    
    outline: none;
    border: none;
  
    cursor: pointer;
    text-align: center;
    transition: all 0.2s linear;
    
    margin: 7% auto;
    letter-spacing: 0.05em;
}
.button1:hover{
    animation: ani9 0.4s ease-in-out infinite alternate;
	background-color: skyblue;
}
@keyframes ani9 {
    0% {
        transform: translateY(4px);
    }
    100% {
        transform: translateY(6px);
    }
}
a { text-decoration: none; }
img{
	border-radius:50%;
}
h1,h2{
	text-align:center;
	font-size: 250%;
}
</style> 
</head>  
<body>  
 <center><h1><img src="img19.png" alt="Avatar" style="width:100px" style="height:200px"><a href="http://localhost/pro/login/member.php">CONNECT</a></h1></center>
<center><h2><font color="violet" class="f">A place to connect</font></h2><hr color="purple"></center>
<br>
<center><h2>Hello <?=$_SESSION['sess_user'];?> ! <a href="logout.php">Logout</a></h2><br> 
<h2>  
Welcome to CONNECT.......   
</h2>  
</body>  
</html>  
<?php  
}  
?>  