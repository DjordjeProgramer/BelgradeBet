// DOM Elements
const previewImage = document.getElementById('previewImage');
const noImageMessage = document.getElementById('noImageMessage');

// Load saved image on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedImage = localStorage.getItem('category6Image');
    if (savedImage) {
        previewImage.src = savedImage;
        previewImage.style.display = 'block';
        noImageMessage.style.display = 'none';
    } else {
        previewImage.style.display = 'none';
        noImageMessage.style.display = 'block';
    }
});