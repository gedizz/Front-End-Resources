<?php 

$type = 'mysql';
$server = 'localhost';
$db = 'products';
$port = '3006';
$charset = 'utf8mb4';


$username = 'root';
$password = 'duke';
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];



try {
    $pdo = new \PDO('mysql:host=127.0.0.1;dbname=products', 'root', 'duke');
} catch (PDOException $e) {
    throw new PDOException($e->getMessage(), $e->getCode());
}



?>