
function createUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username)
    console.log(password)
    if (validateUser(username, password)) {
        console.log({"username": username, "password": password})
        console.log("Welcome back, " + username)
        return
    }
    alert(
        "Invalid input - username or password is wrong (password should be at least six characters)."
    )
    return
    
}

function clearForm(...fields) {
    for (let field of fields) {
        field.value = ""
    }
}

function validateUser(username, password) {
    if ((username.trim().length > 0) && (password.trim().length >=6)) {
        return true
    }
    return false
}

function main() {
    let submitBtn = document.getElementById("submit");
    let clearBtn = document.getElementById("clear");

    submitBtn.addEventListener("click", createUser)
    // clearBtn.addEventListener("click", clearForm(usernameInput, passwordInput), false)
}

main()
