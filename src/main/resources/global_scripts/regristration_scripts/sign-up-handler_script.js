// import moment from "../../../../../node_modules/moment/moment.js";
import { InputSanitizingHandler } from "../security-measures_scripts/input-sanitizing_script.js";
import { PasswordGuidelines } from "../security-measures_scripts/password-guidelines_script.js";

export class SignUpHandler {

    constructor() {
        this.firstname = document.getElementById("firstname");
        this.lastname = document.getElementById("lastname");
        this.birthday = document.getElementById("birthday");
        this.username = document.getElementById("username");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.login_Inputs = document.getElementsByClassName("login-input");

        this.neededSanatizing = [];

        this.sanitizeInputHandler = new InputSanitizingHandler();
        this.passwordGuidelines = new PasswordGuidelines();
    }


    processSignUpData() {
        try {

            this.neededSanatizing.push(
                this.firstname.value,
                this.lastname.value,
                this.username.value,
                this.email.value,
                this.password.value
            );

            let authorized = this.sanitizeInputHandler.sanitizeInput(this.neededSanatizing);
            let authorizedPassword = this.passwordGuidelines.passwordGuidlines();

            if (authorized && authorizedPassword) {
                this.calculateAge();
            } else { throw new Error("youre Data wasnt authorized"); }

        } catch (err) {
            console.error("A Problem occured: ", e)
        }


    }

    calculateAge() {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();
        let day = new Date().getDay();
        let birthYear = year - Number(this.birthday.value.slice(0, 4));
        let birthMonth = Number(this.birthday.value.slice(5, 7));
        (birthMonth < month) ? this.signUpDataTransfer(birthYear) : this.signUpDataTransfer(--birthYear);
    }

    signUpDataTransfer(age) {
        const signUpData = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            age: age,
            birthday: this.birthday.value,
            username: this.username.value,
            email: this.email.value,
            password: this.password.value,
        }


        this.post_apiInterfaceHandler.signUpApiHandler(signUpData);
        for (let index = 0; index < this.login_Inputs.length; index++) {
            this.login_Inputs[index].value = "";

        }

    }

}



