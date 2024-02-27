myElement = [
    document.getElementById('first-name'),
    document.getElementById('last-name'),
    document.getElementById('email-address'),
    document.getElementById('password')
];

myError = [
    document.getElementById('first-name-error'),
    document.getElementById('last-name-error'),
    document.getElementById('email-address-error'),
    document.getElementById('password-error')
];

myErrorMsg = [
    'First Name cannot be empty',
    'Last Name cannot be empty',
    'Looks like this is not an email',
    'Password cannot be empty'
];

myValidation = () => {
    for (var i=0; i < myElement.length; i++) {
        myElement[i].style.borderColor = 'hsl(246, 25%, 77%)';
        myElement[i].style.background = 'none';
        myError[i].innerHTML = "";

        if (myElement[i].checkValidity() == false) {
            myElement[i].style.borderColor = 'red';
            myElement[i].style.background = 'url(./images/icon-error.svg) no-repeat 410px center';
            myError[i].innerHTML = myErrorMsg[i];
        }
    }
}