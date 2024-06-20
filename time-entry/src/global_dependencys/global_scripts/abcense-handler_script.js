import{POST_ApiInterfaceHandler} from "./api-handler_scripts/post-api-handler_script.js";
import { CookieHandler } from "../global_scripts/cookies-handler_script.js";


export class AbcenseHandler {

    constructor(){
        this.post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        this.cookie_handler = new CookieHandler();
        this.absenceName;
        this.startDate;
        this.endDate;
    }

    processStartData(){
        let start = document.getElementById("start").value
        this.startDate = start;
    }

    processEndData(){
        let end = document.getElementById("end").value
        this.endDate = end;
     
     }

     processAbcenseNameData(){
        let absence = document.getElementById("selection").value
        this.absenceName = absence;
      
     }

     processAbcenceData(){
        let cookieUuid = this.cookie_handler.getCookie("uuid");
        let absenceData = {
        uuid: cookieUuid.replace(/"/g, ''),
        absencestart: this.startDate ,
        absenceend:this.endDate,
        absencetype: this.absenceName 
        }
        console.log(absenceData)
        this.post_ApiInterfaceHandler.abcenseApiHandler(absenceData);
     }
 

}
