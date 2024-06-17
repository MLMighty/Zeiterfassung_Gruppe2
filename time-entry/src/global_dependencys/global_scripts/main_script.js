
import { LoginHandler } from "./regristration_scripts/login-handler_script.js";
import { SignUpHandler } from "./regristration_scripts/sign-up-handler_script.js";
import { PasswordGuidelines } from "./security-measures_scripts/password-guidelines_script.js";
import { AbcenseHandler} from "./abcense-handler_script.js";

const loginhandler = new LoginHandler();
const passwordGuidelinesHandler = new PasswordGuidelines();
const signUpHandler = new SignUpHandler();
const abcenseHandler = new AbcenseHandler();

export function callLoginHandler(event){
    event.preventDefault();
    loginhandler.checkLoginCookies();
}

export function forwardingChangeOnInput(event){

    event.preventDefault();
    passwordGuidelinesHandler.passwordGuidlines();
}

export function forwardingLoginData(event){
    event.preventDefault();
    loginhandler.processLoginData();
}

export function forwardingSignUpData(event){

    event.preventDefault();
    signUpHandler.processSignUpData();
}

export function forwardingAbcenseData(event){
    event.preventDefault();
    abcenseHandler.processAbcenceData();
}

export function forwardingStartDate(event) {
    event.preventDefault();
    abcenseHandler.processStartData();
    
}
export function forwardingEndDate(event) {
    event.preventDefault();
    abcenseHandler.processEndData();
    
}

export function forwardingAbcenceName(event) {
    event.preventDefault();
    abcenseHandler.processAbcenseNameData();
}