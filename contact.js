document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Show a loading message
    const button = document.querySelector('button');
    button.textContent = "Sending...";
    button.disabled = true;

    // Simulate a delay (e.g., for sending the form)
    setTimeout(function() {
        button.textContent = "Sent!";
        button.disabled = false;

        // Reset the form
        document.getElementById('contactForm').reset();
        alert("Your message has been successfully sent!");

        // Optionally, you can send the form data to a server here
    }, 2000); // Simulate a 2-second delay for sending the message
});
