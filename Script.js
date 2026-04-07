document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  const darkModeBtn = document.getElementById("darkModeBtn");

  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "Light Mode";
    } else {
      darkModeBtn.textContent = "Dark Mode";
    }
  });

  const skills = document.querySelectorAll(".skills span");

  skills.forEach(function (skill) {
    skill.addEventListener("click", function () {
      skill.classList.toggle("active");
    });
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("show");
    }, index * 200);
  });
});