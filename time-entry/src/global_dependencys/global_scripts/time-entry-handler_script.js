import{POST_ApiInterfaceHandler} from "./api-handler_scripts/post-api-handler_script.js";

export class TimeEntryHanlder{

    constructor(){
        this.post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        this.taskEntry;
        this.projectEntry;
        this.startDate;
        this.endDate;

    }


    checkTimeEntryStartDate(){
      
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate sind von 0-11
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
   
        this.startDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      
    }


    checkTimeEntryEndDate(){
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate sind von 0-11
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
   
        this.endDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
        

        this.post_ApiInterfaceHandler.timeEntryApiHandler(this.processTimeEntryData());


    }



    processTimeEntryData(){
        let timeEntryData={
            starttime: this.startDate,
            endtime:this.endDate,
        }
   
        return timeEntryData

    }



    
}