class Validator {
  static REQUIRED = "REQUIRED";
  static MIN_LENGTH = "MIN_LENGTH";

  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  createUser() {
    console.log("Welcome back, " + this.username);
  }
}

class UserInputForm {
  constructor() {
    this.submitBtn = document.getElementById("submit");
    this.usernameInput = document.getElementById("username");
    this.passwordInput = document.getElementById("password");
    this.clearBtn = document.getElementById("clear");
    this.submitBtn.addEventListener("click", this.signupHandler.bind(this));
    this.clearBtn.addEventListener("click", this.clearHandler.bind(this));
  }

  signupHandler(event) {
    event.preventDefault();
    const enteredUserName = this.usernameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (
      !Validator.validate(enteredUserName, Validator.REQUIRED) ||
      !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
    ) {
      alert(
        "Invalid input - username or password is wrong (password should be at least six characters)."
      );
      return;
    }

    const newUser = new User(enteredUserName, enteredPassword);
    console.log(newUser);
    newUser.createUser();
    this.clearHandler();
  }
  clearHandler() {
    event.preventDefault();
    this.usernameInput.value = "";
    this.passwordInput.value = "";
  }
}

new UserInputForm();
