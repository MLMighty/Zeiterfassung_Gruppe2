
import { LoginHandler } from "./regristration_scripts/login-handler_script.js";
import { SignUpHandler } from "./regristration_scripts/sign-up-handler_script.js";
import { PasswordGuidelines } from "./security-measures_scripts/password-guidelines_script.js";


const loginhandler = new LoginHandler();
const signUpHandler = new SignUpHandler();
const passwordGuidelinesHandler = new PasswordGuidelines();




export function forwardingSignUpData(event){
    event.preventDefault();

    signUpHandler.processSignUpData();
}

export function forwardingLoginData(event){
    event.preventDefault();

    loginhandler.processLoginData();
}

export function callLoginHandler(event){
    event.preventDefault();
    loginhandler.checkLoginCookies();
}

export function forwardingChangeOnInput(event){
    event.preventDefault();
    passwordGuidelinesHandler.passwordGuidlines();
}
