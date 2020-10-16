var inputActive = false;

var subFunct = function () {
    if (!inputActive) {
        inputActive = true
    } else {
        var emailinputField = document.getElementById('userEmail');
        window.alert(`${emailinputField.value} was added to our mailing list`);
        emailinputField.value = '';
        inputActive = false
    }
}
