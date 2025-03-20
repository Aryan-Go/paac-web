// Smooth Scrolling for Navigation Links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const section = document.querySelector(this.getAttribute("href"));
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});

// Learn More Button Functionality (Only for Home Page)
function learnMore() {
    window.location.href = "aboutus.html";
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = form.querySelector("input[type='text']").value.trim();
            const email = form.querySelector("input[type='email']").value.trim();
            const message = form.querySelector("textarea").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you for contacting us! We will get back to you soon.");
            form.reset();
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Dynamic Event Updates (For Events Page)
document.addEventListener("DOMContentLoaded", function () {
    const eventSection = document.querySelector(".event-list");

    if (eventSection) {

        eventSection.innerHTML = events.map(event => 
            `<p><strong>${event.title}</strong> - ${event.date}</p>`
        ).join("");
    }
});

// Dynamic Blog Updates (For Blog Page)
document.addEventListener("DOMContentLoaded", function () {
    const blogSection = document.querySelector(".blog-posts");

    if (blogSection) {

        blogSection.innerHTML = blogs.map(blog => 
            `<p><a href="${blog.link}">${blog.title}</a></p>`
        ).join("");
    }
});
