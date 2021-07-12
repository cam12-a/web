<?php

?>
<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title?></title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
		
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/carousel.css">

	<link rel="stylesheet" type="text/css" href="./../statics/style/css/welcomPage.css">
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/modalLogin.css">
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/logo.css">
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/menuLeft.css">
</head>
<body>
	<?php echo $link?>
	<div id="container">
		<header>
			<nav>
				<div class="header">
					<div class="header-left">
						<a href="#" class="logotype1">                        
						    <div><b>FUTUR</b>IN</div>
						    <span>E-COMMERCE</span>
						</a>
					</div>
					<div class="header-midle">
						<form>
							<span class="icon"><i class="fa fa-search"></i></span>
							<input type="text" name="search" class="search" placeholder="Поиск">
							
						</form>
						
					</div>
					<div class="header-right">
						<ul class="ulForBanner">
						<li><a href="./Catalogue">КАТАЛОГ</a></li>
						<li><a href="./Delivery">ДОСТАВКА</a></li>
						<li><a href="./Payment">ОПЛАТА</a></li>
						<li><a href="#" id="showModal" class="btn" data-toggle="modal"> ЛИЧНЫЙ КАБИНЕТ</a></li>
						<li><a href="./About"> О НАС</a></li>
						<li><a href=""><i class="fa fa-shopping-cart"></i></a></li>
					</ul>
					</div>
					<span class="category">&#9776;КАТЕГОРИЯ</span>
					<div class="header-rightHideen" id="rightHeader">
						<ul class="ulForBanner">
						<span href="#" class="closebtn">&times;</span>
						<li><a href="./Catalogue">КАТАЛОГ</a></li>
						<li><a href="./Delivery">ДОСТАВКА</a></li>
						<li><a href="./Payment">ОПЛАТА</a></li>
						<li><a href="#" id="showModal" class="btn" data-toggle="modal"> ЛИЧНЫЙ КАБИНЕТ</a></li>
						<li><a href="./About"> О НАС</a></li>
						<li class="menu-left-responsive"><a href="#"> Категория</a>	
							<ul class="submenu">
								<li><a href="">КАТАЛОГ</a></li>
								<li><a href="#">ДОСТАВКА</a></li>
								<li><a href="#">ОПЛАТА</a></li>
							</ul>
						</li> 
					</ul>
					</div>
				</div>
				<!--<div id="banner">
					<ul class="ulForBanner">
						<li class="logo"><a href="#"><span>FUTUR></a></li>
						<li class="centerText menu-responsive"><a href="">КАТАЛОГ</a></li>
						<li class="centerText search"><input type="search" class="search" ></li>
						<li class="centerText menu-responsive"><a href="#">ДОСТАВКА</a></li>
						<li class="centerText menu-responsive" ><a href="#">ОПЛАТА</a></li>
						<li class="centerText menu-responsive"><a href="#" id="show-modal" class="btn" data-toggle="modal"> ЛИЧНЫЙ КАБИНЕТ</a></li>
						<li class="centerText menu-responsive"><a href="static/aboutUs.html"> О НАС</a></li>
						<li class="basket"><img src="static/img/market.png" width="100px;" height="50px;" ></li>
						<li class="menu-left-responsive"><a href="#"> Категория</a>	
							<ul class="submenu">
								<li><a href="">КАТАЛОГ</a></li>
								<li><a href="#">ДОСТАВКА</a></li>
								<li><a href="#">ОПЛАТА</a></li>
							</ul>
						</li>
					</ul>
				</div>  -->
				<hr>
			</nav>
		</header>
		<div id="container-fluid">
			<aside id="catalogue">
				<ul class="menu-left">
					<li class="menu-salat"><a href="#">Салат
						<span class="fleche-left fa fa-caret-down"></span>
					</a>
						<ul class="salat">
							<li class="submenu"><a href="#">цезарь</a></li>
							<li class="submenu"><a href="#">свекла</a></li>
						</ul>
					</li>
					<li class="menu-bake"><a href="#">Выпечки
						<span class="fleche-left fa fa-caret-down"></span>
						</a>
						<ul class="bake">
							<li class="submenu"><a href="#">Ягоды</a></li>
							<li class="submenu"><a href="#">Блины</a></li>
						</ul>
					</li>
					<li class="menu"><a href="#">Заготовки</a>
					</li>
					<li class="menu"><a href="dzJavaScript.html">ДЗ JavaScript fetch</a></li>
				</ul>
			</aside>
