<?php 


function checkExists($name) {
    require 'conn.php';
    $sql = 'SELECT * FROM attributes WHERE name = ?';
    $statement = $pdo->prepare($sql);
    $statement->execute([$name]);
    $result = $statement->fetch();
    return ($result) ? true : false;

}

require 'conn.php';


// Add each new attribute to the attributes table if it doesn't exist already
foreach ($_GET as $row => $value) {
    if (!checkExists($value)) {
        $sql = 'INSERT INTO attributes (name) VALUES (?)';
        $statement = $pdo->prepare($sql)->execute([$value]);
    }
    
}

/*
===Attribute Saving===
On Publish:
    - Javascript recognizes click and creates an array of attribute values
    - PHP accepts the array and serializes to send to DB

 
 




*/





?>