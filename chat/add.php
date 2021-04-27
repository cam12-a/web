<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$connect = new mysqli($servername, $username, $password);

if($connect->query("CREATE DATABASE IF NOT EXISTS test")){

try {
  $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "CREATE TABLE IF NOT EXISTS  tchat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(30) NOT NULL,
    comment VARCHAR(255) NOT NULL
    )";

    if($conn->query($sql)){
        echo "table created successfully\n";
        $postData=file_get_contents('php://input');
        $data=json_decode($postData,true);
      //  var_dump($data);
        $name=htmlspecialchars($data['Name']);
        $comment=htmlspecialchars($data['Text']);
        $sql="INSERT INTO tchat(fullname,comment) VALUES(?,?)";
        $conn->prepare($sql)->execute([$name,$comment]);      
    }

 // echo "Connected successfully\n";
 
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
}
else{
    //echo "Ошибка при создании баз-данных\n";
}
