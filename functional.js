
const FIELDS = ["submit", "clear", "username", "password"]

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

function fetchFields(...fields){
    let fieldsObj = {}
    for (let field of fields) {
        fieldsObj[field] = document.getElementById(field)
    }
    return fieldsObj
}

function main() {
    let myFields = fetchFields(FIELDS)

    myFields.submit.addEventListener("click", function(event) {
        event.preventDefault()
        createUser(myFields.username.value, myFields.password.value)
        clearForm(myFields.username, myFields.password)
    })
    myFields.clear.addEventListener("click", function(event){
        event.preventDefault()
        clearForm(myFields.username, myFields.password)
    })
}

main()
