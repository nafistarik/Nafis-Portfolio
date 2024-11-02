// Mode Button Functionality starts
const modeButton = document.getElementById("mode-button");
const root = document.documentElement;

modeButton.addEventListener("click", () => {
  if (
    getComputedStyle(root).getPropertyValue("--secondary-color").trim() ===
    "#1b1b1f" // if background color is dark
  ) {
    // Switch to light mode
    root.style.setProperty("--primary-color", "#1b1b1f");
    root.style.setProperty("--secondary-color", "#f3f3f3");
    modeButton.innerHTML = '<i class="fas fa-moon"></i>'; // Change icon to moon
  } else {
    // Switch to dark mode
    root.style.setProperty("--primary-color", "#f3f3f3");
    root.style.setProperty("--secondary-color", "#1b1b1f");
    modeButton.innerHTML = '<i class="fas fa-cloud-sun"></i>'; // Change icon to sun
  }
});
// Mode Button Functionality ends


// Custom Cursor Animation starts
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "#f56565";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
// Custom Cursor Animation ends


// Initialize Swiper Sliders starts
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    config.centeredSlides = true; // Center the active slide
    config.slidesPerView = 1; // Ensure only one slide is visible

    new Swiper(swiperElement, config);
  });
}
// Initialize Swipers when the window is loaded
window.addEventListener("load", initSwiper);
// Initialize Swiper Sliders ends


// // Contact Form Submission Handling starts
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Check if the form is valid
//   if (this.checkValidity()) {
//     alert('Form submitted successfully!');
//     this.reset(); // Optional: Reset the form after successful submission
//   } else {
//     alert('Please fill out all required fields.');
//   }
// });
// // Contact Form Submission Handling ends


// Scroll Event for "Back to Top" Icon Visibility starts
window.addEventListener('scroll', function() {
  const upIcon = document.querySelector('.up-icon');
  if (window.scrollY > 0) {
    upIcon.classList.add('show');
  } else {
    upIcon.classList.remove('show');
  }
});
// Scroll Event for "Back to Top" Icon Visibility ends


// Section Navigation Active Link Handling starts
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function activateLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLink);
  window.addEventListener("click", activateLink);
});
// Section Navigation Active Link Handling ends


