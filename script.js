// Splash Screen
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.visibility = "hidden";
  }, 1000);
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");

// Set default to dark mode
document.body.classList.add("dark");
toggleBtn.textContent = "☀️";

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Contact Form
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "✅ Message sent successfully!";
  formMessage.style.color = "green";
  contactForm.reset();
});

// Scroll animations
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("visible");
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
