import './styles.css';

// Hello World functionality
function displayHelloWorld(): void {
    const messageElement = document.getElementById('hello-message');
    if (messageElement) {
        messageElement.innerText = 'Hello World!';
        console.log('Hello World message displayed successfully!');
    }
}

// Wait for DOM to be loaded before running our script
document.addEventListener('DOMContentLoaded', displayHelloWorld);
