<?php
// Check if data was sent via POST
if (isset($_POST['image']) || isset($_POST['text'])) {
    // Get the data from POST
    $imageData = isset($_POST['image']) ? $_POST['image'] : '';
    $textData = isset($_POST['text']) ? $_POST['text'] : '';

    // Here, you can save the data to a database or perform any other action
    // For now, we just return the received data as JSON

    echo json_encode([
        'status' => 'success',
        'receivedImage' => $imageData,
        'receivedText' => $textData,
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'No data received',
    ]);
}
?>
