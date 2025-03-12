function formDatatoJSON(formData) {
    let obj = {};
    formData.forEach(function (value, key) {
        obj[key] = value;
    });
    return obj
}


document.querySelector("#register_form").addEventListener("submit", function (e) {
    e.preventDefault()
    let registerForm = new FormData(document.querySelector("#register_form"));



    let username = registerForm.get('username');
    let password = registerForm.get('password');
    let email = registerForm.get('email')


    let user_name_validator = document.querySelector("#user_name_validator")
    let password_validator = document.querySelector("#password_validator")
    let email_validator = document.querySelector("#email_validator")

    let errcount = 0;

    if (!username) {
        user_name_validator.innerHTML = "Username is Requried"
        errcount += 1;
    }
    else {
        user_name_validator.innerHTML = ""
    }
    if (!password) {
        password_validator.innerHTML = "Password is Requried"
        errcount += 1;
    }
    else {
        password_validator.innerHTML = ""
    }
    if (!email) {
        email_validator.innerHTML = "Email is Requried"
        errcount += 1;
    }
    else {
        email_validator.innerHTML = ""
    }

    if (errcount == 0) {

        fetch("http://localhost:3000/add-user", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDatatoJSON(registerForm))
        })
            .then(result => result.json())
            .then(result => {
                console.log(result)
            })

    }

})