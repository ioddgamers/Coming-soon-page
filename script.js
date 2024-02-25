
const inputField = document.getElementById("enterEmail");
const errorMessage = document.getElementById("errorMessage");
const errorIcon = document.querySelector(".error");

inputField.addEventListener("change", function() {
    const email = inputField.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        errorMessage.innerHTML = "";
        errorIcon.classList.add("hidden"); 
    } else {
        errorMessage.innerHTML = "Please provide a valid email";
        errorIcon.classList.remove("hidden");
    }
});