
export class CookieHandler{

    constructor(){
    }

    setCookie (name, value , hours){
      
        const date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
        
    }

    setUUIDCookie(uuidName,uuid,hours){
        const date = new Date();
        date.setTime(date.getTime() + (hours*60*60*1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = uuidName + "=" + uuid + ";" + expires + ";path=/";
    }

    getUuidcookie(cookie){
        let replaceable = /["\\]/gi
       
        const cookieValue = cookie + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let splittedCookie = decodedCookie.split(';');
        splittedCookie[1].replace(replaceable, "")
        console.log(splittedCookie)
        for(let i = 0; i < splittedCookie.length; i++){
            console.log("wirda aufgerufen for")
            let charV = splittedCookie[i];
            while(charV.charAt(i) == '\\'){
                console.log("wirda aufgerufen while")
                charV = charV.substring(1);
            }
            if(charV.indexOf(cookieValue) == 0){
                console.log("wirda aufgerufen if")
                console.log("der cookie " + charV.substring(cookieValue.length, charV.length))
                return charV.substring(cookieValue.length, charV.length)
            }

        }
        return "";
    }

    getCookie(cookie){
        const cookieValue = cookie + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let splittedCookie = decodedCookie.split(';');
        for(let i = 0; i < splittedCookie.length; i++){
            let charV = splittedCookie[i];
            while(charV.charAt(i) == " "){
                charV = charV.substring(1);
            
            }
            if(charV.indexOf(cookieValue) == 0){
                return charV.substring(cookieValue.length, charV.length)
            }

        }
        return "";

    }

}