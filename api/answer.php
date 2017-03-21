<?php
header('Content-Type: application/json');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

require '../lib/answers-store.php';

$pretty = isset($_GET['pretty']) &&  $_GET['pretty'] === 'true';
$answer = AnswersStore::instance()->random();

echo json_encode($answer, $pretty ? JSON_PRETTY_PRINT : 0);
