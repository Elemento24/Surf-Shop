let newPasswordValue;
let confirmationValue;
const submitBtn = document.getElementById('update-profile');
const newPassword = document.getElementById('new-password');
const confirmation = document.getElementById('password-confirmation');
const validationMessage = document.getElementById('validation-message');

function validatePasswords(message, add, remove) {
    validationMessage.textContent = message;
    validationMessage.classList.add(add);
    validationMessage.classList.remove(remove);
}

confirmation.addEventListener('input', e => {
    e.preventDefault();
    newPasswordValue = newPassword.value;
    confirmationValue = confirmation.value;
    if (newPasswordValue !== confirmationValue) {
        validatePasswords('Passwords do not Match', 'danger', 'success');
        submitBtn.setAttribute('disabled', true);
    } else {
        validatePasswords('Passwords Match', 'success', 'danger');
        submitBtn.removeAttribute('disabled');
    }
});