<?php

// Set required headers to allow external host (vite dev port: 5173)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Inclure le fichier contenant la classe PUNK
require '../library/PUNK.php';

// Instancier la classe PUNK
$punk = new PUNK();

$data = null;

// Dans le cas où on passe un paramètre "beer" dans l'url, on ne récupère que les données de cette bière, sinon on réccupère les 60 bières
if (isset($_GET['beer'])) {
    $data = $punk->getBeer($_GET['beer']);
} else {
    $data = $punk->getBeers();
}

header('Content-Type: application/json');
echo json_encode($data);
