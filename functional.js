
function createUser(username, password) {
    if (validateUser(username, password)) {
        console.log({"username": username, "password": password})
        console.log("Welcome back, " + username)
        return
    }
    alert(
        "Invalid input - username or password is wrong (password should be at least six characters)."
    )
    clearForm()
    return
    
}

function clearForm(...fields) {
    for (let field of fields) {
        field.value = ""
    }
}

function validateUser(username, password) {
    if ((username.length > 0) && (password.length >=6)) {
        return true
    }
    return false
}

function main() {
    let submitBtn = document.getElementById("submit");
    let clearBtn = document.getElementById("clear");

    let usernameInput = document.getElementById("username")
    let passwordInput = document.getElementById("password")

    

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault()
        createUser(usernameInput.value, passwordInput.value)
        clearForm(usernameInput, passwordInput)
    })
    clearBtn.addEventListener("click", function(event){
        event.preventDefault()
        clearForm(usernameInput, passwordInput)
    })
}

main()
