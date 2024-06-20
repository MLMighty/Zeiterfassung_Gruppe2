

export class PasswordGuidelines {
    constructor() {
        this.password = document.getElementById("password");
        this.password_GuidlineText = document.getElementById("password-guidline-text");
        this.guidlinesInfo = [
            {
                Characters: /[0-9]/g,
                isTrueText: " 0-9 ,",
                isFalseText: " 0-9 ,",
            },
            {
                Characters: /[A-Z]/g,
                isTrueText: " A-Z ,",
                isFalseText: " A-Z ,",
            },
            {
                Characters: /[a-z]/g,
                isTrueText: " a-z ,",
                isFalseText: " a-z ,",
            },
            {
                Characters: /[:_.!#$%&*+?=]/gi,
                isTrueText: " :_.!#$%&*+?= ,",
                isFalseText: " :_.!#$%&*+?= ,",
            },

        ]
    }

    passwordGuidlines() {
        let passwordValue = this.password.value;
        let authorizedCharacterLength = this.checkCharacterLength(passwordValue)
        let authorizedCharacterValidation = this.checkCharacterValidation(passwordValue)
        if(authorizedCharacterLength && authorizedCharacterValidation){
            //    this.password_GuidlineText.innerText =  this.password_GuidlineText.innerText.replace("Needed:", "");
            return true;
        }
    }

    checkCharacterLength(passwordValue){
        if(passwordValue.length >= 10){
            this.password_GuidlineText.innerText =  this.password_GuidlineText.innerText.replace(" min. length: 10 ,", "");
            return true;
        }else if(this.password_GuidlineText.innerText.includes(" min. length: 10 ,") === false && passwordValue.length < 10){
            this.password_GuidlineText.innerText += " min. length: 10 ,";
        }

    }

    checkCharacterValidation(passwordValue) {

        for (let i = 0; i < this.guidlinesInfo.length; i++) {
            if (this.guidlinesInfo[i].Characters.test(passwordValue)) {
                this.password_GuidlineText.innerText = this.password_GuidlineText.innerText.replace(this.guidlinesInfo[i].isTrueText , "");
                return true;
            }
            if(this.password_GuidlineText.innerText.includes(this.guidlinesInfo[i].isTrueText) === false && this.guidlinesInfo[i].Characters.test(passwordValue) === false ){
                this.password_GuidlineText.innerText += this.guidlinesInfo[i].isFalseText;
            }
        }
        return false;
    }

    generatePassword(){
        let generatedPassword = this.get_apiInterfaceHandler.getGeneratedPasswordApiHandler();
        this.password.value = generatedPassword;
    }




}