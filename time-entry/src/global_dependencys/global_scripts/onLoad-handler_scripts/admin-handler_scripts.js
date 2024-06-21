import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {GET_ApiInterfaceHandler  } from "../api-handler_scripts/get-api-handler_script.js";

let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let get_ApiInterfaceHandler =  new  GET_ApiInterfaceHandler();
let roleSection = document.getElementById("roleSelection");
let emailDataList = document.getElementById("exampleList");
let roleSectionNewMember = document.getElementById("roleSectionNewMember")
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();

window.addEventListener("DOMContentLoaded", ()=>{
    let cookieUuid = cookie_handler.getUuidcookie("uuid");
    post_ApiInterfaceHandler.getAdminApiHandler(cookieUuid.replace(/"/g, '')).then(data => callAdminWebData(data))
    get_ApiInterfaceHandler.getRolesApiHandler().then(databaseData =>  createOptions(databaseData))
    get_ApiInterfaceHandler.getEmailsApiHandler().then(databaseData =>  createEmailOptions(databaseData))

})

function callAdminWebData(databaseData) {
    createApprovalListRows(databaseData)
   
   
}

function createOptions(databaseData){
    console.log(databaseData)
    databaseData.roles.forEach(role => {
        let roleOptions = document.createElement("option");
        roleOptions.innerText = role.rolename
        roleSection.append(roleOptions)
        roleSectionNewMember.append(roleOptions)
    });
    createEmailOptions(databaseData)
}

function createEmailOptions(databaseData){

    for (let index = 0; index < databaseData.length; index++) {
        let emailOptions = document.createElement("option");
        emailOptions.innerText = databaseData[index].email;
        emailDataList.append(emailOptions)
    }
}


function createApprovalListRows(databaseData) {
    const approvalList = document.getElementById('approvalList');

    databaseData.approvals.forEach(entry => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${entry.datum}</td>
            <td>${entry.mitarbeiter}</td>
            <td>${entry.projekt}</td>
            <td>${entry.taetigkeit}</td>
            <td>${entry.stunden}</td>
            <td>${entry.differenz}</td>
            <td><button class="approveButton">Genehmigen</button></td>
            <td><button class="rejectButton">Ablehnen</button></td>
        `;

        approvalList.appendChild(tr);

       
        tr.querySelector('.approveButton').addEventListener('click', () => {
            console.log('Genehmigt:', entry);
            tr.remove(); 
        });

        tr.querySelector('.rejectButton').addEventListener('click', () => {

            console.log('Abgelehnt:', entry);
            tr.remove(); 
        });
    });
}
