const toggle = document.getElementById("theme-toggle");
if (toggle) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "moon") {
    document.documentElement.setAttribute("data-theme", "moon");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      document.documentElement.setAttribute("data-theme", "moon");
      localStorage.setItem("theme", "moon");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "sun");
    }
  });
}
/* =========================
   NAME CLICK TOGGLE
========================= */

const name = document.getElementById("name-toggle");

if (name) {
  name.addEventListener("click", () => {
    name.classList.toggle("active");
  });
}

/* =========================
   WORD ROTATION (Typing Effect)
========================= */

const words = ["Developer", "Designer", "Engineer"];
const swapWord = document.querySelector(".swap-word");

if (swapWord) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 80;
  let deletingSpeed = 50;
  let pauseTime = 1500;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      swapWord.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), pauseTime);
      }
    } else {
      swapWord.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();
}
document.querySelector(".scroll-indicator")?.addEventListener("click", () => {
  document.querySelector(".featured-work")?.scrollIntoView({
    behavior: "smooth"
  });
});


/*COPY EMAIL*/
/* COPY EMAIL */
const emailButton = document.getElementById('copy-email');
const emailAddress = 'sundarn@uw.edu';

if (emailButton) {
  emailButton.addEventListener('click', () => {
    // Copy email to clipboard
    navigator.clipboard.writeText(emailAddress).then(() => {
      const originalText = emailButton.textContent;
      emailButton.textContent = 'Email Copied';
      setTimeout(() => {
        emailButton.textContent = originalText;
      }, 2000); // 2 seconds
    });
  });
}


// IMAGE ZOOM FUNCTIONALITY

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-modal");

if (modal && modalImg && closeBtn) {
  const images = document.querySelectorAll(".case-section img, .case-hero");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}
const scrollPercentEl = document.getElementById("scrollPercentage");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.round((scrollTop / docHeight) * 100);
  scrollPercentEl.textContent = `${scrollPercent}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollContainers = document.querySelectorAll('.autoScroll');

  if (!scrollContainers.length) return;

  let scrollSpeed = 0.5;

  scrollContainers.forEach(container => {
    function autoScroll() {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  });
});