<?php
    define('DB_SERVER' , 'localhost');
    define('DB_USERNAME' , 'root');
    define('DB_PASSWORD' , '');
    define('DB_NAME' , 'tour');
    $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    if($link === false)
    {
        die("Error couldn't connect". mysqli_connect_error());
    }
    if(isset($_POST['username']))
    {
        $at = $_POST['username'];
        $mail = $_POST['email'];
        $number = $_POST['phone'];
        $sql = "insert into tour(`id`,`name`,`mail`,`phone`) values (NULL,'".$at."','".$mail."','".$number."')";
        $result = mysqli_query($link , $sql);
        if($result)
        {
            echo "Success!";
            exit();
        }
        else
        {
            echo "Wrong!";
        }
    }
?>