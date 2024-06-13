export class InputSanitizingHandler {
    constructor() {
        this.authorizedInput = false;
        this.Sanitized;
        this.specialCharacters = /[&<>|/+;:,='"]/gi;
        this.sanitize_GuidlineText = document.getElementById("sanitize-guidline-text");
    }

    sanitizeInput(userInput) {
        console.log(userInput)
        try {
            for (let i = 0; i <= userInput.length; i++) {
                if(this.specialCharacters.test(userInput[i]) === true ) {
                    userInput[i].replace(this.specialCharacters, "");
                    this.sanitize_GuidlineText.textContent = `Following Characters arent allowed: &<>|/+;:,='" `
                    return false;
                }else{
                    return true
                }}
        } catch (error) {
            console.error("Problems with sanitizing: ", error);
        }
    }



}