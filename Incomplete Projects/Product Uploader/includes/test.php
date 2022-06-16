<?php 

$id = 42;
require 'conn.php';
$sql = 'SELECT attributes FROM product_info WHERE id = ?';
$statement = $pdo->prepare($sql);
$statement->execute([$id]);
$result = $statement->fetch();
$data = unserialize($result[0]);
foreach ($data as $value) {
    echo $value;
}

?>