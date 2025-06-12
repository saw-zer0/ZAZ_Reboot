<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/db_connect.php';

$mysqli = get_db_connection();

$result = $mysqli->query("SELECT id, price FROM packages");
$prices = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $prices[] = $row;
    }
    $result->free();
}

echo json_encode(['success' => true, 'prices' => $prices]);

$mysqli->close();
?>