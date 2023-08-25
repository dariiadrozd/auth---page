const registerButton = document.querySelector("body .secondPart button");

function isValidAccount(inputValue) {
    if (!/^\+48[0-9]{9}$|^[A-z0-9\\\/\-\_\@]+(\@)(gmail|yandex|google|mail|vk)(.com|.ru|.by|.net)$/gm.test(inputValue))
        throw new Error("Please enter a valid email or phone number");
}

function isValidPassword(inputValue) {
    if (inputValue.length < 8)
        throw new Error(
            "The entered password is too short. The password must be at least 8 characters long"
        );
}

function isValidConfirmPassword(passwordValue, confirmPasswordValue) {
    if (passwordValue !== confirmPasswordValue)
        throw new Error("You entered the password incorrectly");
}

registerButton.addEventListener("click", function () {
    try {
        const emailOrNumberInput = document.querySelector(
            "body .rightSection .email input"
        );
        const passwordInput = document.querySelector(
            "body .rightSection .password input"
        );
        const confirmPasswordInput = document.querySelector(
            "body .rightSection .password2 input"
        );

        isValidAccount(emailOrNumberInput.value);
        isValidPassword(passwordInput.value);
        isValidConfirmPassword(passwordInput.value, confirmPasswordInput.value);

        alert("You have successfully registered in the system");
    } catch (error) {
        alert(error.message);
    }
});