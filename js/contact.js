// Initialize EmailJS
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace "YOUR_USER_ID" with your actual EmailJS user ID
})();

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            // Show success message
            document.getElementById('form-feedback').style.display = 'block';
            document.getElementById('form-feedback').style.color = 'green';
            document.getElementById('form-feedback').innerText = 'Form submitted successfully!';
        }, function(error) {
            // Show error message
            document.getElementById('form-feedback').style.display = 'block';
            document.getElementById('form-feedback').style.color = 'red';
            document.getElementById('form-feedback').innerText = 'Form submission failed. Please try again.';
        });
});
