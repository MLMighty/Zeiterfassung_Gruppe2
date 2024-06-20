import { GET_ApiInterfaceHandler } from "../api-handler_scripts/get-api-handler_script.js";
let get_ApiInterfaceHandler =  new  GET_ApiInterfaceHandler();
let tableBody = document.getElementById("tableBody")
let taskSection = document.getElementById("tasktSelection");
let projectSection = document.getElementById("projectSelection");
let databaseData = {
    tasks:[
        {
            taskvalue:"Rasenmähen",
            task_id:2
        },
        {
            taskvalue:"büsche schneiden",
            task_id:3
        },
        {
            taskvalue:"programm-Code schreiben",
            task_id:3
        }
    ],
    projects:[
        {
            projectvalue:"Gartenarbeit",
            project_id:2
        },
        {
            projectvalue:"Software",
            project_id:2
        }
    ],
    FakeRows:[
        { Datum: '2024-06-19', Start: '08:00', Ende: '16:00', Ist: '8', Soll: '8', Projekt: 'Projekt A', Tätigkeit: 'Programmierung', freigegeben: 'Ja' },
        { Datum: '2024-06-20', Start: '09:00', Ende: '17:00', Ist: '8', Soll: '8', Projekt: 'Projekt B', Tätigkeit: 'Testing', freigegeben: 'Nein' },
    ]
}


window.addEventListener("DOMContentLoaded", ()=>{
    // get_ApiInterfaceHandler.getTimeEntryApiHandler().then(data => createWebSelections(timeEntrydata))
    createWebSelections();
    createTablesRows()
})




function createWebSelections(timeEntrydata){
   
    databaseData.tasks.forEach(task => {
        let taskOptions = document.createElement("option");
        taskOptions.dataset.data_id = task.task_id
        taskOptions.innerText = task.taskvalue
        taskSection.append(taskOptions)
    });


    databaseData.projects.forEach(project => {
        let projectOptions = document.createElement("option");
        projectOptions.dataset.data_id = project.project_id
        projectOptions.innerText = project.projectvalue
        projectSection.append(projectOptions)
    });

}

function createTablesRows(){

    const tableBody = document.getElementById('tableBody');

            databaseData.FakeRows.forEach(rowData => {
                const row = document.createElement('tr');

                Object.keys(rowData).forEach(key => {
                    const td = document.createElement('td');
                    td.textContent = rowData[key];
                    row.appendChild(td);
                });

                tableBody.appendChild(row);
            });

}
