const sunMoonContainer = document.querySelector(".sun-moon-container");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

let rotation = 0;

document.querySelector(".theme-toggle-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Increment rotation by 180 degrees for each toggle
  rotation += 180;

  // Apply rotation to the sun and moon, but they remain centered above the button
  sun.style.transform = `rotate(${rotation}deg)`;
  moon.style.transform = `rotate(${rotation}deg)`;

  // Smooth transition of opacity between sun and moon
  sun.style.opacity = document.body.classList.contains("dark") ? "0" : "1";
  moon.style.opacity = document.body.classList.contains("dark") ? "1" : "0";
});
