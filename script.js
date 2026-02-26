// Scroll progress bar
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});

// Typing animation
const roles = ["Operations Specialist", "HR Strategist", "Logistics Optimizer"];
let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[roleIndex];
  let displayText;

  if (isDeleting) {
    displayText = currentRole.substring(0, charIndex--);
  } else {
    displayText = currentRole.substring(0, charIndex++);
  }

  document.getElementById("typing").textContent = displayText;

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
