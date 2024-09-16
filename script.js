// Function to create static stars
function createStars(starContainer, starCount) {
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    starContainer.appendChild(star);
  }
}

// Create stars in different layers for parallax effect
createStars(document.getElementById('layer1'), 150);
createStars(document.getElementById('layer2'), 100);

// Function to create a shooting star
function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('shooting-star');
  const startX = Math.random() * 100 + 'vw';
  const startY = Math.random() * 100 + 'vh';
  shootingStar.style.left = startX;
  shootingStar.style.top = startY;
  document.getElementById('shooting-stars-container').appendChild(shootingStar);

  // Random speed and direction for the shooting star
  shootingStar.style.animation = `shoot ${Math.random() * 2 + 1}s ease-out forwards`;

  // Remove shooting star after animation ends
  setTimeout(() => {
    shootingStar.remove();
  }, 2000);
}

// Randomly create shooting stars
setInterval(createShootingStar, Math.random() * 3000 + 1000); // Every 1 to 4 seconds

// Function to create a rocket
function createRocket() {
  const rocket = document.createElement('div');
  rocket.classList.add('rocket');
  const startX = Math.random() * 100 + 'vw';
  const startY = Math.random() * 100 + 'vh';
  rocket.style.left = startX;
  rocket.style.top = startY;
  document.getElementById('shooting-stars-container').appendChild(rocket);

  // Random speed and direction for the rocket
  rocket.style.animation = `fly ${Math.random() * 5 + 3}s ease-out forwards`;

  // Remove rocket after animation ends
  setTimeout(() => {
    rocket.remove();
  }, 5000);
}

// Randomly create rockets
setInterval(createRocket, Math.random() * 5000 + 2000); // Every 2 to 7 seconds

// Navbar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navbarMenu = document.getElementById('navbar-menu');

  hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });

  // Typing effect in navbar logo using GSAP
  const typingElement = document.querySelector('.typing-effect');
  const texts = ["COSMOCODE", "Presented by", "Sourcify IN"]; // Texts to type
  let index = 0;

  function typeText() {
    typingElement.innerHTML = ''; // Clear existing text
    let text = texts[index];
    let letterArray = text.split('');

    letterArray.forEach((letter, i) => {
      gsap.fromTo(
        typingElement,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.05, delay: i * 0.1, onComplete: () => {
            typingElement.innerHTML += letter;
          }
        }
      );
    });

    index = (index + 1) % texts.length;
    setTimeout(typeText, 4000 + letterArray.length * 100); // Adjust based on text length
  }

  typeText();
});
