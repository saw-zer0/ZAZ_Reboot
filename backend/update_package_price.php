<?php
session_start();
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow logged-in admins
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit();
}

require_once __DIR__ . '/db_connect.php';

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
if (!isset($data['id']) || !isset($data['price'])) {
    echo json_encode(['success' => false, 'message' => 'Missing id or price']);
    exit();
}

$packageId = intval($data['id']);
$newPrice = $data['price'];

// Connect to MySQL using the helper
$mysqli = get_db_connection();

// Update price
$stmt = $mysqli->prepare("UPDATE packages SET price = ? WHERE id = ?");
$stmt->bind_param("si", $newPrice, $packageId);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Update failed']);
}

$stmt->close();
$mysqli->close();
?>