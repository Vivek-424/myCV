// Wait until the whole page is loaded first
document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // 1. Show current year automatically
  // ===============================
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();

  // ===============================
  // 2. Welcome message
  // ===============================
  alert("Welcome to Vivek's CV Website!");

  // ===============================
  // 3. Dark mode button
  // ===============================
  const darkModeBtn = document.getElementById("darkModeBtn");

  darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change button text depending on mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.textContent = "Light Mode";
    } else {
      darkModeBtn.textContent = "Dark Mode";
    }
  });

  // ===============================
  // 4. Make skill tags clickable
  // ===============================
  const skills = document.querySelectorAll(".skills span");

  skills.forEach(function (skill) {
    skill.addEventListener("click", function () {
      alert("Skill selected: " + skill.textContent);
    });
  });

  // ===============================
  // 5. Show cards one by one
  // ===============================
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("show");
    }, index * 200);
  });

});