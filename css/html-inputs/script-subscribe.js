var inputActive = false;
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var subFunct = function () {
    if (!inputActive) {
        inputActive = true
    } else {
        var emailInput = document.getElementById('userEmail');
        var userEmail = emailInput.value;
        if (emailRegex.test(userEmail)) {
            window.alert(`${emailInput.value} was added to our mailing list`);
        } else {
            window.alert(`${emailInput.value} is not a valid email`);
        }
        emailInput.value = '';
        inputActive = false
    }
}
