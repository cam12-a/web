<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title><?php echo $title?></title>

         <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="./../../../statics/style/select2.min.css">
        
        <!-- Our Custom CSS -->
         <link rel="stylesheet" type="text/css" href="./../../../statics/style/css/adminPanel.css">
        <link rel="stylesheet" type="text/css" href="./../../../statics/style/css/modalLogin.css">
        <link rel="stylesheet" type="text/css" href="./../../../statics/style/schedule.css">


    
        <style type="text/css">
            div#id_teacher {
                line-height: 30px;
            }
              input.btn.float-right.login_btn.confirm_btn {
    transform: translateX(80px);
}
        </style>

       
    </head>
    <body>



        <div class="wrapper">
            <!-- Sidebar Holder -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <span>Школа</span>
                    
                </div>

                <ul class="list-unstyled components">
                    <li>
                        <a href="./../Student/" >Ученик</a>
                    </li>
                    <li>
                        <a href="./../Teacher/">Преподаватель</a>
                    </li>
                   
                      <li>
                        <a href="./../schedule/" class="schedule">Расписание</a>
                    </li>
                    <li>
                         <a href="./../Subject/" >Занятия</a>
                    </li>
                   
                    <li>
                        <a href="./../profile/">Профиль</a>
                    </li>
                </ul>
            </nav>

            <!-- Page Content Holder -->
            <div id="contentCategory">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">

                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-align-left"></i>
                               
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                               <a href="./../../Admin/LogOut/"><span class="glyphicon glyphicon-log-out logOut" style="float:right; font-size: 30px;"></span></a>
                            </ul>
                        </div>
                    </div>
                </nav>

         
