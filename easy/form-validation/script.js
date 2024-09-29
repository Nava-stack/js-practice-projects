const fname = document.getElementById("name");
const pword = document.getElementById("password");
const error = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (fname.value == "" || pword.value == null) {
    messages.push("Name is required");
  }
  let pw = pword.value.length;

  if (pw <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (pw >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerText = messages.join(", ");
  }
});
