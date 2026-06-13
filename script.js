// Selecting elements & changing their content and style.
//selecting elements
const title = document.querySelector("title");
const headings = document.querySelector(".heading");
const heading1 = document.querySelector("h1");
const heading2 = document.querySelector("h2");

//changing content
title.textContent = "Welcome to My Portfolio";

//changing styles
headings.style.margin = "20px";
headings.style.padding = "10px";
heading1.style.fontSize = "50px";
heading2.style.fontSize = "60px";

//Event handling
//click event listener (Dark mode toggle)
document.getElementById("theme-button").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

//hover event listener
const skillCards = document.querySelectorAll(".list-items");
skillCards.forEach(function (card) {
  card.addEventListener("mouseenter", function () {
    card.style.backgroundColor = "var(--color-16)";
  });

  card.addEventListener("mouseleave", function () {
    card.style.backgroundColor = "var(--color-13)";
  });

  card.addEventListener("mouseenter", function () {
    card.style.cursor = "default";
  });
});

//submit event listener
const formSubmission = document.getElementById("form");
formSubmission.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent successfully!");

  //clear storage after form submission
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("message");

  form.reset();
});

//Form validation
const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("text-area");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

//name validation
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters";
  } else {
    nameError.textContent = "";
  }
});

//email validation
emailInput.addEventListener("input", function () {
  if (
    !emailInput.value.trim().includes("@") ||
    !emailInput.value.trim().includes(".")
  ) {
    emailError.textContent = "Please enter a valid email";
  } else {
    emailError.textContent = "";
  }
});

//message validation
messageInput.addEventListener("input", function (e) {
  if (messageInput.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
  } else {
    messageError.textContent = "";
  }
});

//Local storage
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("text-area");

nameField.value = localStorage.getItem("name") || "";
emailField.value = localStorage.getItem("email") || "";
messageField.value = localStorage.getItem("message") || "";

nameField.addEventListener("input", function () {
  localStorage.setItem("name", nameField.value);
});
emailField.addEventListener("input", function () {
  localStorage.setItem("email", emailField.value);
});
messageField.addEventListener("input", function () {
  localStorage.setItem("message", messageField.value);
});
