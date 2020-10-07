function handleInput(e) {
    const inputEmail = e.target.value;
    const validInput = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail.trim());

    if (validInput) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid")
    } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid")
    }

    if (!inputEmail) {
        e.target.classList.remove('invalid');
    }
}