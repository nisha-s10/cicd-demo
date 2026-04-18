// Smooth scrolling + active nav link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// Fade-in animation on scroll

const faders = document.querySelectorAll("section");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(
  function(entries, observer) {

    entries.forEach(entry => {

      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("show");
      observer.unobserve(entry.target);

    });

  },
  appearOptions
);

faders.forEach(section => {
  section.classList.add("fade-in");
  appearOnScroll.observe(section);
});


// Back to top button

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});