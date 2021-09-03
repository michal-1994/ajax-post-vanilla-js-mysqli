<?php 

$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

if(isset($_POST['name']))
{   

    $name = mysqli_real_escape_string($conn, $_POST['name']);
    echo 'GET: Your name is ' . $_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $query)) 
    {
        echo 'User Added...';
    } 
    else 
    {
        echo "Error: ".mysqli_error($conn);
    }
    
}