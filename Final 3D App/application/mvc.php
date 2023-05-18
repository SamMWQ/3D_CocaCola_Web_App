<?php
// Includes
require 'view/load.php';
require 'model/model.php';
require 'controller/controller.php';
// Initialise by creating a new controller instance (or object)
$pageURI = $_SERVER['REQUEST_URI'];
$pageURI = substr($pageURI, strrpos($pageURI, 'index.php') + 10);
if (!$pageURI) {
    new Controller('home');
} else {
    // echo "pageURI: $pageURI<br>";
    // echo $_SERVER['REQUEST_URI'];
    new Controller($pageURI);
}
?>