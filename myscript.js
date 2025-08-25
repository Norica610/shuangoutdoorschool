document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("learnMoreBtn");
    btn.addEventListener("click", function() {
        alert("Thanks for your interest! More info is coming soon.");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "image/Water_Activities/kayaking.jpg",
    "image/Rope_Activities/climbing.jpg",
    "image/Land_Activities/archery.jpg",
    "image/Land_Activities/Orienteering2.jpg"
  ];

  let index = 0;
  const slideshow = document.getElementById("slideshow");

  setInterval(() => {
    slideshow.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % images.length;
      slideshow.src = images[index];
      slideshow.classList.remove("fade-out"); 
    }, 1000);

  }, 4000);

  const btn = document.getElementById("learnMoreBtn");
  btn.addEventListener("click", () => {
    alert("Thanks for your interest! More info is coming soon.");
  });
});

  document.getElementById("learnMoreBtn").addEventListener("click", function() {
    window.location.href = "https://www.nts.org.uk";  
  });
