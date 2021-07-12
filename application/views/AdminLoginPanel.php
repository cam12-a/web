<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title?></title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./../statics/style/css/AdminLogin.css">
	


   <!--Made with love by Mutiullah Samim -->
   
	<!--Bootsrap 4 CDN-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <!--Fontawesome CDN-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">


</head>
<body>
	
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Вход в систему</h3>
			</div>
			<div class="card-body">
				<form method="Post" action="./Admin/Login/">
					<p><?php echo $confirm?></p>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username" name="email">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password" name="passwd">
					</div>
					<p style="color:red;"><?php 
						$array=$_SERVER['QUERY_STRING']; 
						$array=explode("=", $array); 
						if(@$array[1]==="dataIncorrect")
							echo "неправильные веденные логин или пароль";

						?></p>
					
					<div class="form-group">
						<input type="submit" value="Войти" class="btn float-right login_btn">
					</div>


					<div class="form-group float-right " style="transform:translate(-10%,70%); font-size: 20px;">
						<a href="./Admin/SendSamplePassword/" class="sendSamplePassword">Забыли пароль?</a>
					</div>
				</form>
			</div>
		
		</div>
	</div>
</div>

  <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script type="text/javascript" src="./../statics/js/jquery.ddslick.min.js"></script>
        <script type="text/javascript" src="./../statics/js/select2.min.js"></script>
     
        <script type="text/javascript" src="./../statics/js/admin.js"></script>

</body>
</html>