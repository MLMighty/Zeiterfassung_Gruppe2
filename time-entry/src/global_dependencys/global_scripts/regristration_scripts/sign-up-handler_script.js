
import { InputSanitizingHandler } from "../../global_scripts/security-measures_scripts/input-sanitizing_script.js";
import { POST_ApiInterfaceHandler } from "../api-handler_scripts/post-api-handler_script.js";
import { PasswordGuidelines } from "../security-measures_scripts/password-guidelines_script.js";


export class SignUpHandler {

    constructor() {
        this.firstname = document.getElementById("firstname");
        this.lastname = document.getElementById("lastname");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");
        this.login_Inputs = document.getElementsByClassName("login-input");

        this.neededSanatizing = [];
        this.post_apiInterfaceHandler = new POST_ApiInterfaceHandler();
        this.sanitizeInputHandler = new InputSanitizingHandler();
        this.passwordGuidelines = new PasswordGuidelines();
    }


    processSignUpData() {
        try {

            this.neededSanatizing.push(
                this.firstname.value,
                this.lastname.value,
                this.email.value,
                this.password.value
            );

            let authorized = this.sanitizeInputHandler.sanitizeInput(this.neededSanatizing);
            let authorizedPassword = this.passwordGuidelines.passwordGuidlines();

            if (authorized && authorizedPassword) {
                this.signUpDataTransfer();
                alert("Sie haben sich erfolgreich registriert.");
            } else { throw new Error("youre Data wasnt authorized"); }

        } catch (err) {
            console.error("A Problem occured: ", e)
        }


    }


    signUpDataTransfer() {
        const signUpData = {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            email: this.email.value,
            password: this.password.value,
        }


        this.post_apiInterfaceHandler.signUpApiHandler(signUpData);
        for (let index = 0; index < this.login_Inputs.length; index++) {
            this.login_Inputs[index].value = "";

        }

    }

}



