function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Validate name
  if (name === "") {
    alert("Name field cannot be blank");
    return false;
  }
  if (/\d/.test(name)) {
    alert("Name should not contain digits");
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Validate password
  if (password !== "CPS2215exam") {
    alert("Incorrect password");
    return false;
  }

  // If all validations pass, proceed to main.html
  window.location.href = "main.html";
  return false;
}
