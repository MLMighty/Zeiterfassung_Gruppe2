import{POST_ApiInterfaceHandler} from "./api-handler_scripts/post-api-handler_script.js";



export class AbcenseHandler {

    constructor(){
        this.post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        this.absenceName;
        this.startDate;
        this.endDate;
    }

    processStartData(){
        let start = document.getElementById("start").value
        this.startDate = start;
    }

    processEndData(){
        this.end = document.getElementById("end").value
        this.endDate = end;
     }

     processAbcenseNameData(){
        let absence = document.getElementById("selection").value
        this.absenceName = absence;
     }

     processAbcenceData(){
        let absenceData = {
         startDate: this.startDate ,
         endDate:this.endDate,
         absenceName: this.absenceName 
        }
        this.post_ApiInterfaceHandler.abcenseApiHandler(absenceData);
     }
 

}