<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
try {
    $conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);
    $return=$conn->query("SELECT fullname,comment FROM tchat");
    $data=array();
    while($row=$return->fetch(PDO::FETCH_ASSOC)){
        $data[]=$row;
    }

    echo json_encode($data);

}catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}