<!DOCTYPE html>
<html lang="en">
<head>
	<title>b&eacute;sik apparel</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=2">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<link rel="stylesheet" href="besikapparel.css" type="text/css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src="besikapparel.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<!-- onload popup -->

<!-- Title Area -->
<div class="jumbotron">
    <h1 class="text-center"">b&eacute;sik apparel</h1>
</div>
	<!-- Navigation Bar -->
<nav class="navbar navbar-inverse navbar-fixed-top">
	<div class="container">
		<div class="row">
			<div class="navbar-header">
		 		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#besikNav">
		 			<span class="icon-bar"></span>
		 			<span class="icon-bar"></span>
		 			<span class="icon-bar"></span>
		 		</button>
			</div>
			<div class="collapse navbar-collapse" id="besikNav">
				<ul class="nav navbar-nav">
					<li><a href="#">home</a></li>
					<li class="dropdown">
						<a href="#" data-toggle="dropdown" class="dropdown-toggle">b&eacute;sik apparel<span class="caret"></span></a>
						<ul class="dropdown-menu">
		        			<li><a href="#iHoop.html">iHoop</a></li>
		         			<li><a href="#Hats.html">Hats</a></li>
		          			<li><a href="#Hoodies.html">Hoodies</a></li>
		          			<li><a href="#Swimwear.html">Swimwear</a></li>
		          			<li><a href="#T-Shirts.html">T-Shirts</a></li>	
        				</ul>
					</li>	   			
	      			<li><a href="#About">about</a></li>
					<li><a href="#Contact">contact</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">

					<li><a data-toggle="modal" href="#Login"><i class="glyphicon glyphicon-log-in"></i>&nbsp;&nbsp;Login</a></li>
				    <li><a href="#Shop">Shop&nbsp;<i class="glyphicon glyphicon-tags"></i></a></li>
				    <li><a href="#"><i class="glyphicon glyphicon-shopping-cart"></i></a>
				</ul>
			</div>
		</div>
	</div>
</nav>

<!-- Launch Login Window -->
<div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header" style="padding:35px 50px;">
				<a class="close" data-dismiss="modal" aria-hidden="true">&times;</a>
				<h4><i class="glyphicon glyphicon-log-in"></i>&nbsp;Login</h4>
			</div>
			<div class="modal-body" style="padding:40px 50px;">
				<form role="form">
					<div class="form-group">
						<label for="usrname"><i class="glyphicon glyphicon-user"></i>&nbsp;Username</label>
						<input type="text" class="form-control" name="username"  id="usrname" placeholder="Enter Username">
					</div>
					<div class="form-group">
						<label for="pwd"><i class="glyphicon glyphicon-lock"></i>&nbsp;Password</label>
						<input type="text" class="form-control" name="password" id="pwd" placeholder="Enter Password">
					</div>
					<div class="checkbox">
						<label><input type="checkbox" value="" checked="">Remember me</label>
					</div>
				</form>
				<button type="submit" class="btn btn-success btn-block">&nbsp;Login</button>
			</div>
			<div class="modal-footer">
				<button type="submit" class="btn btn-danger btn-default pull-left" data-dismiss="modal">&nbsp;Cancel</button>
				<p>Forgot<a data-toggle="modal" href="#Password">&nbsp;Password?</a></p>
			</div>
		</div>
	</div>
</div>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
	</ol>
	<!-- Slide Wrapper -->
	<div class="carousel-inner">
		<div class="item active">
			<img src="images/fjords_wide.jpg" style="width:100%;">
			<div class="carousel-caption">
				<h3>Placeholder Text.</h3>
				<p>test. test. test. </p>
			</div>
		</div>
		<div class="item">
			<img src="images/fjords_wide.jpg" style="width:100%;">
			<div class="carousel-caption">
				<h3>Placeholder Text.</h3>
				<p>test. test. test. </p>
			</div>
		</div>
		<div class="item">
			<img src="images/fjords_wide.jpg"style="width:100%;">
			<div class="carousel-caption">
				<h3>Placeholder Text.</h3>
				<p>test. test. test. </p>
			</div>
		</div>
		<!-- Left & Right Controls 
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			<i class="glyphicon glyphicon-chevron-left"></i>
		</a>
		<a class="right carousel-control" href="#myCarousel" data-slide="next">
			<i class="glyphicon glyphicon-chevron-right"></i>
		</a>
		-->
	</div>
</div> 

<div class="container-1 text-center">
	<div class="row" id="apparel-style">
		<div class="col-sm-2 col-sm-offset-1">
			<img src="images/owner.jpg" class="img-repsonsive img-circle">
			<div class="middle">
				<div class="text"><a href="#">View All</a></div>
			</div>
			<div class="caption">
				<p>iWorkout</p>
			</div>
		</div>
		<div class="col-sm-2">
			<img src="images/owner.jpg" class="img-repsonsive img-circle">
			<div class="middle">
				<div class="text"><a href="#">View All</a></div>
			</div>
			<div class="caption">
				<p>Hats</p>
			</div>
		</div>
		<div class="col-sm-2">
			<img src="images/owner.jpg" class="img-repsonsive img-circle">
			<div class="middle">
				<div class="text"><a href="#">View All</a></div>
			</div>
			<div class="caption">
				<p>Hoodies</p>
			</div>
		</div>
		<div class="col-sm-2">
			<img src="images/owner.jpg" class="img-repsonsive img-circle">
			<div class="middle">
				<div class="text"><a href="#">View All</a></div>
			</div>
			<div class="caption">
				<p>T-shirts</p>
			</div>
		</div>
		<div class="col-sm-2">
			<img src="images/owner.jpg" class="img-repsonsive img-circle">
			<div class="middle">
				<div class="text"><a href="#">View All</a></div>
			</div>
			<div class="caption">
				<p>Swimwear</p>
			</div>
		</div>
	</div>
</div>

<div class="parallax"></div>

<div class="container text-center">
	<div class="row">
		<h2>why b&eacute;sik?</h2>
		<img src="images/owner.jpg" class="img-repsonsive img-circle pull-left">
		<br>
		<div class="container">
			<div class="row">
				<p><br>
				b&eacute;sik apparel first originated as an idea to build basic web design templates for personal use. everything is easier when things are less complicated. the more simple, the better.<br><br>
				the owner, Kristina Bethea aka KB collaborated with a college friend, Krystyna whom at the time, was into web design.<br><br>grew up always with a creative mind while learning art, architecture, and design. She began looking at code at 15 years old and was fascinated by the manipulation of the web, and knew that one day she wanted to make a career out of it.<br><br>
				KB studied business and art, and obtained her B.A in Multimedia Production at Cal State University, Northridge (CSUN) where she can utulize her skill set across different mediums. She decided to start her own business at home all while pursuing her passion in web development to learn Bootstrap and hand-code the site. She is a unique individual and hopes to inspire others through her journey.</p><br>
				<p>KB studied business and art, and obtained her B.A in Multimedia Production at Cal State University, Northridge (CSUN) where she can utulize her skill set across different mediums. She decided to start her own business at home all while pursuing her passion in web development to learn Bootstrap and hand-code the site. She is a unique individual and hopes to inspire others through her journey</p>
			</div>
		</div>
	</div>
</div>

<div class="parallax-1"></div>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="section-title text-center">
                <h2>contact b&eacute;sik.</h2>
                <p>all fields marked with * are required.</p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <form method="post" name="sentMessage" id="contactForm" action="form-to-email.php">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control input-lg" placeholder="name *" id="name" required data-validation-required-message="Please enter your name.">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control input-lg" placeholder="email *" id="email" required data-validation-required-message="Please enter your email address.">
                        </div>
                        <div class="form-group">
                            <input type="tel" class="form-control input-lg" placeholder="phone (optional)" id="phone" required data-validation-required-message="Please enter your phone number.">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea class="form-control input-lg" placeholder="message *" id="message" rows="7" required data-validation-required-message="Please enter a message."></textarea>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 text-center">
                        <div id="success"></div>
                        <button type="submit" value="send" class="btn btn-primary waves-effect" style="background-color: #35c7a6; width: 25%;">send.</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<?php

?>



<div class="parallax-2"></div>

<!-- FOOTER -->
<footer class="container">
	<div class="footer-row">
		<ul class="col-sm-12 col-md-4 col-lg-4">
			<li><h3>b&eacute;sik apparel</h3></li>
	        <li><a href="#">about</a></li>
	        <li><a href="#">contact</a></li>
	        <li><a href="#">shop</a></li>
        </ul>
    </div>
    <div class="footer-row-1">
		<ul class="col-sm-12 col-md-4 col-lg-4">
			<li><h3>connect</h3></li>
			<div class="footer-icons">
				<li><a href="#" class="envelope"><i class="fa fa-facebook fa-2x"></i></a></li>
		        <li><a href="#" class="instagram"><i class="fa fa-instagram fa-2x"></i></a></li>
		        <li><a href="#" class="twitter"><i class="fa fa-twitter fa-2x"></i></a></li>
	        </div>
        </ul>
    </div>
	<div class="footer-row-2">
		<ul class="col-sm-12 col-md-4 col-lg-4">
			<li><h3>subscribe</h3></li>
			<li>
				<div class="well">
	             <form action="#">
	              <div class="input-group">
	                 <input class="btn btn-lg" name="email" id="emailfield" type="email" placeholder="your email" required>
	                 <button class="btn btn-info btn-lg" type="submit">submit</button>
	              </div>
	             </form>
	    	 	</div>
    	 	</li>
        </ul>
    </div>	
</footer>
<hr>
<div class="container">
	<div class="footer-bottom">
		<div class="container">
			© 2017 b&eacute;sik apparel.
			<div class="payment-icons">
				<img src="images/venmo.jpg" class="img-repsonsive" height="30px" width="30px">
				<img src="images/pay.png" class="img-repsonsive" height="30px" width="30px">
				<img src="images/card.png" class="img-repsonsive" height="30px" width="30px">
				<img src="images/business.png" class="img-repsonsive" height="30px" width="30px">
				<img src="images/americanxs.png" class="img-repsonsive" height="30px" width="30px">
			</div>
		</div>
	</div>
</div>
</body>
</html>