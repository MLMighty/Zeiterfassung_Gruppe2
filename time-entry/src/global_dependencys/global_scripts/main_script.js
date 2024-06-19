
import { LoginHandler } from "./regristration_scripts/login-handler_script.js";
import { SignUpHandler } from "./regristration_scripts/sign-up-handler_script.js";
import { PasswordGuidelines } from "./security-measures_scripts/password-guidelines_script.js";
import { AbcenseHandler} from "./abcense-handler_script.js";
import {TimeEntryHanlder} from "./time-entry-handler_script.js"

const loginhandler = new LoginHandler();
const passwordGuidelinesHandler = new PasswordGuidelines();
const signUpHandler = new SignUpHandler();
const abcenseHandler = new AbcenseHandler();
const timeEntryHanlder= new TimeEntryHanlder();

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

export function forwardingTimeEntryStartDate(event){
    event.preventDefault();
    timeEntryHanlder.checkTimeEntryStartDate();
}
export function forwardingTimeEntryEndDate(event){
    event.preventDefault();
    timeEntryHanlder.checkTimeEntryEndDate();
}

export function forwardingTimeEntryProjectType(event){
    event.preventDefault();
    timeEntryHanlder. updateTimeEntryProjectType();
}
export function forwardingTimeEntryTaskType(event){
    event.preventDefault();
    timeEntryHanlder. updateTimeEntryTaskType();
}


/////////////////////////////////////////////////////////////////////////

export function forwardingTeamLeadCreateProject(event){
    event.preventDefault();

}


export function forwardingTeamLeadStartDate(event){
    event.preventDefault();
}

export function forwardingTeamLeadEndDate(event){
    event.preventDefault();

}

export function forwardingTeamLeadAddWorker(event){
    event.preventDefault();

}


///////////////////////////////////////////////////////////////////////////


export function forwardingAdminCreateProject(event){
    event.preventDefault();

}


export function forwardingAdmindStartDate(event){
    event.preventDefault();
}

export function forwardingAdminEndDate(event){
    event.preventDefault();

}

export function forwardingAdminAddWorker(event){
    event.preventDefault();

}

