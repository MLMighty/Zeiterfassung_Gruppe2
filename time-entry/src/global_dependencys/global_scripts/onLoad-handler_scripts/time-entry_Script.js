import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();
let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let tableBody = document.getElementById("tableBody")
let taskSection = document.getElementById("tasktSelection");
let projectSection = document.getElementById("projectSelection");



window.addEventListener("DOMContentLoaded", ()=>{
    let cookieUuid = cookie_handler.getUuidcookie("uuid");
    post_ApiInterfaceHandler.getTimeEntryApiHandler(cookieUuid.replace(/"/g, '')).then(databaseData => processData(databaseData))

})

document.getElementById("logOut").addEventListener('click', deleteCookie); 
    
function deleteCookie(){
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';

    window.location = "time-entry_Site.html";;
  }


function processData(databaseData){

    createWebSelections(databaseData);
    createTablesRows(databaseData);
}



function createWebSelections(){
   
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
