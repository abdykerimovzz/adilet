document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Форма жөнөтүүнү алдын алуу

    // Маалыматтарды алуу
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Текшерүү: Эгерде толтурулбай калган болсо
    if (name === "" || message === "") {
        alert("Please fill out all fields!");
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Формадагы маалыматтарды тазалоо
        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }
});

// Social icons hover effect
const socialIcons = document.querySelectorAll('.social-links a');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Scroll animation effect for About Section
const aboutSection = document.getElementById("about");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);
