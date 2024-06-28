// Function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');

    // Validate email
    if (!validateEmail(email)) {
        feedback.style.display = 'block';
        feedback.style.color = 'red';
        feedback.textContent = 'Please enter a valid email address.';
        return;
    }

    // Prepare the data to be sent
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send('service_lgfdt1v', 'template_id', templateParams)
        .then(function(response) {
            feedback.style.display = 'block';
            feedback.style.color = 'green';
            feedback.textContent = 'Your message has been sent successfully!';
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            feedback.style.display = 'block';
            feedback.style.color = 'red';
            feedback.textContent = 'Failed to send the message. Please try again later.';
            console.log('FAILED...', error);
        });
});
