var inputActive = false;
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var msgBox = document.getElementById('msgBox');

var showMsg = function (_msgType) {
    msgBox.classList.remove('noDisplay')
    if (_msgType === "OK") {
        msgBox.classList.add('okMsg')
    } else {
        msgBox.classList.add('errMsg')
    }
    setInterval(() => {
        msgBox.classList.add('noDisplay');
        msgBox.classList.remove('okMsg')
        msgBox.classList.remove('errMsg')

    }, 7 * 1000);
}

var subFunct = function () {
    if (!inputActive) {
        inputActive = true
    } else {
        var emailInput = document.getElementById('userEmail');
        var userEmail = emailInput.value;
        if (userEmail.length !== 0 || emailRegex.test(userEmail)) {
            msgBox.innerText = `${userEmail} was successfuly added to our mailing list.`
            showMsg("OK");
        } else {
            msgBox.innerText = `Oops! sorry can't add ${userEmail} since it is an invalid email!`
            showMsg("ERR");
        }
        emailInput.value = '';
        inputActive = false
    }
}
