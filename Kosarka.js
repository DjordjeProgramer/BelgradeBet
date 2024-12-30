// DOM Elements for Image
const imageElement = document.getElementById('category8-img');
const fileInput = document.getElementById('category8-upload');
const uploadButton = document.getElementById('uploadBtn8');
const removeButton = document.getElementById('removeBtn8');

// DOM Elements for Text Section
const textElement = document.getElementById('categoryText-input');
const saveTextButton = document.getElementById('saveTextBtn');
const removeTextButton = document.getElementById('removeTextBtn');

// Load saved image and text on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSavedImage();
    loadSavedText();
});

// Image Upload
uploadButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result;
            saveImage(imageData);
            displayImage(imageData);
        };
        reader.readAsDataURL(file);
    }
});

// Remove image
removeButton.addEventListener('click', () => {
    localStorage.removeItem('category8Image');
    imageElement.src = '';
    imageElement.style.display = 'none';
    removeButton.style.display = 'none';
    uploadButton.style.display = 'block';
});

// Save image to localStorage
function saveImage(imageData) {
    localStorage.setItem('category8Image', imageData);
}

// Load image from localStorage
function loadSavedImage() {
    const savedImage = localStorage.getItem('category8Image');
    if (savedImage) {
        displayImage(savedImage);
    }
}

// Display image
function displayImage(imageData) {
    imageElement.src = imageData;
    imageElement.style.display = 'block';
    removeButton.style.display = 'block';
    uploadButton.style.display = 'none';
}

// Text Save
saveTextButton.addEventListener('click', () => {
    const text = textElement.value;
    if (text) {
        saveText(text);
        displayText(text);
    }
});

// Remove text
removeTextButton.addEventListener('click', () => {
    localStorage.removeItem('category8Text');
    textElement.value = '';
    removeTextButton.style.display = 'none';
    saveTextButton.style.display = 'block';
});

// Save text to localStorage
function saveText(text) {
    localStorage.setItem('category8Text', text);
}

// Load text from localStorage
function loadSavedText() {
    const savedText = localStorage.getItem('category8Text');
    if (savedText) {
        displayText(savedText);
    }
}

// Display text
function displayText(text) {
    textElement.value = text;
    removeTextButton.style.display = 'block';
    saveTextButton.style.display = 'none';
}

// Send the data to PHP
function sendDataToServer() {
    const imageData = localStorage.getItem('category8Image');
    const textData = localStorage.getItem('category8Text');

    if (imageData || textData) {
        fetch('saveData.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `image=${encodeURIComponent(imageData || '')}&text=${encodeURIComponent(textData || '')}`
        })
        .then(response => response.json())
        .then(result => {
            console.log('Server response:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

// Call sendDataToServer when you want to send the data (e.g., on form submit, button click)
