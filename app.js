const loginButton = document.querySelector("body .secondPart button");

function isValidAccount(accountValue) {
    if (!/^\+48[0-9]{9}$|^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|mail|vk)(.com|.ru|.by|.net)$/gm.test(accountValue))
        throw new Error("Please enter a valid email or phone number");
}

function isValidPassword(passwordValue) {
    if (passwordValue.length < 8)
        throw new Error("The entered password is too short. The password must be at least 8 characters long");
}

loginButton.addEventListener("click", function () {
    try {
        const emailOrNumberInput = document.querySelector(".gmail input");
        const passwordInput = document.querySelector(".password input");

        isValidAccount(emailOrNumberInput.value);
        isValidPassword(passwordInput.value);

        alert("You have successfully logged into the system");
    } catch (error) {
        alert(error.message);
    }
});