
import { CookieHandler } from "../cookies-handler_script.js";
import { InputSanitizingHandler } from "../security-measures_scripts/input-sanitizing_script.js";


export class LoginHandler {

    constructor(){
        this.loggedIn_display = document.getElementById("loggedIn-display");
        this.login_Container_Visibility = document.getElementById("login-Container-Visbility");
        this.email = document.getElementById("login-email");
        this.password = document.getElementById("login-password");

        this.neededSanatizing = [];

        this.cookieHandler = new CookieHandler;
        this.sanitizeInputHandler = new InputSanitizingHandler();

    }


    processLoginData(){
        try{
            this.neededSanatizing.push(
                this.email.value,
                this.password.value
            );

            let authorized = this.sanitizeInputHandler.sanitizeInput(this.neededSanatizing);

            if(authorized){
                const loginData = {
                    email: this.email.value,
                    password: this.password.value,
                }
                this.post_apiInterfaceHandler.loginApiHandler(loginData).then(succesfullLogin =>  this.accountExistsCheck(succesfullLogin));
            }else{throw new Error("youre Data wasnt authorized");}

        }catch(err){
            console.error("A Problem occured: ", err)
        }

    }

    checkLoginCookies(){
        let loginBool = this.cookieHandler.getCookie("loggedIn")
        if(loginBool === "true"){
            this.login_Container_Visibility.style.display ="none";
            document.body.style.pointerEvents = "auto";

        }else{
            this.loggedIn_display.classList.add("loggedIn-false");
            document.body.style.pointerEvents = "none";
        }
    }

    accountExistsCheck(succesfullLogin){
        if(succesfullLogin === "true"){
            this.loggedIn_display.classList.add("loggedIn-true");
            this.cookieHandler.setCookie("loggedIn", "true" , 3);
            setTimeout(() => {
                this.login_Container_Visibility.style.display ="none";
            }, 1000);
        }else{
            alert("Sie haben noch kein Konto, melden Sie sich an");
        }
    }







}





