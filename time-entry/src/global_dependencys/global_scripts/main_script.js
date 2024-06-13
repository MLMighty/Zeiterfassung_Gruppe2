
import { LoginHandler } from "./regristration_scripts/login-handler_script.js";
import { SignUpHandler } from "./regristration_scripts/sign-up-handler_script.js";
import { PasswordGuidelines } from "./security-measures_scripts/password-guidelines_script.js";

const loginhandler = new LoginHandler();
const passwordGuidelinesHandler = new PasswordGuidelines();
const signUpHandler = new SignUpHandler();

export function callLoginHandler(event){
    event.preventDefault();
    loginhandler.checkLoginCookies();
}

export function forwardingChangeOnInput(event){
    console.log("wird auferufen")
    event.preventDefault();
    passwordGuidelinesHandler.passwordGuidlines();
}

export function forwardingLoginData(event){
    event.preventDefault();
    loginhandler.processLoginData();
}

export function forwardingSignUpData(event){
    console.log("main_ script wird aufgerufen");
    event.preventDefault();
    signUpHandler.processSignUpData();
}