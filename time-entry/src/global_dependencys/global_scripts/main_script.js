
import { LoginHandler } from "./regristration_scripts/login-handler_script.js";
import { PasswordGuidelines } from "./security-measures_scripts/password-guidelines_script.js";

const loginhandler = new LoginHandler();
const passwordGuidelinesHandler = new PasswordGuidelines();


export function callLoginHandler(event){
    event.preventDefault();
    loginhandler.checkLoginCookies();
}

export function forwardingChangeOnInput(event){
    event.preventDefault();
    passwordGuidelinesHandler.passwordGuidlines();
}

