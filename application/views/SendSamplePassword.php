<!DOCTYPE html>
<html>
<head>
	<title><?php echo $title?></title>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="./../../../statics/style/css/AdminLogin.css">

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
				<h3><?php echo $modalName?></h3>
			</div>
			<div class="card-body">
				<form method="Post" action="../UpdatePasswordPanel/">
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username" name="to">
						
					</div>
					
					
					<div class="form-group">
						<input type="submit" value="Сгенерить одноразовый пароль" class="btn float-right login_btn" style="background-color: #FFC312; width: 170px;">
					</div>
					<p style="color:red"><?php echo $error?><p>
				
					<div class="form-group float-right " style="transform:translate(-70px,95%); font-size: 20px;">
						<a href="../Login/" class="UpdatePassword">Отменить и вернуть к входу</a>
					</div>
				</form>
			</div>
		
		</div>
	