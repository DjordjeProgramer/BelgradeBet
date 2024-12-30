// DOM Elements for Image and Text Preview
const previewImage = document.getElementById('previewImage');
const noImageMessage = document.getElementById('noImageMessage');
const textBox = document.getElementById('message-box-write');

// Load saved image and text on page load
document.addEventListener('DOMContentLoaded', () => {
    // Image preview from localStorage
    const savedImage = localStorage.getItem('category8Image');
    if (savedImage) {
        // If an image exists in localStorage, display it
        previewImage.src = savedImage;
        previewImage.style.display = 'block'; // Show the image
        noImageMessage.style.display = 'none'; // Hide the "no image" message
    } else {
        // If no image is found, hide the image and show the "no image" message
        previewImage.style.display = 'none';
        noImageMessage.style.display = 'block';
    }

    // Text preview from localStorage
    const savedText = localStorage.getItem('category8Text');
    // Check if savedText is empty or undefined
    if (savedText && savedText !== '') {
        // If text is found in localStorage, display it
        textBox.textContent = savedText;
    } else {   
        // If no text is found, show the default message
        textBox.textContent = 'Nista nije napisano na strani admina.';
    }
});
