import{POST_ApiInterfaceHandler} from "./api-handler_scripts/post-api-handler_script.js";

export class AdminHandler{
    constructor(){
        this.post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        this.startDate;
        this.endDate;
    }

    
    checkChangeStartDateProject(){
        let projectEntry = document.getElementById("startDate").value;
        this.projectEntry = projectEntry
    }

    checkChangeEndDateProject(){
        let projectEntry = document.getElementById("endDate").value;
        this.projectEntry = projectEntry
    }

    checkChangeStartDateTask(){
        let projectEntry = document.getElementById("projectSelection").value;
        this.projectEntry = projectEntry
    }

    checkChangeEndDateTask(){
        let projectEntry = document.getElementById("projectSelection").value;
        this.projectEntry = projectEntry
    }

    checkInputs(){

    }

    processTeamLeadData(){
        let teamLeadData={
            projectstartDate:,
            projectendDate: ,
            projectName:,
            workerEmail: ,

            taskStartDate: ,
            taskEndDate: ,
            taskName: ,

        }

    }

    

}