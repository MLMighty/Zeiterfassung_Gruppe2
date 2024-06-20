import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";

let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let roleSection = document.getElementById("roleSelection");
let emailDataList = document.getElementById("exampleList");
let roleSectionNewMember = document.getElementById("roleSectionNewMember")
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();

window.addEventListener("DOMContentLoaded", ()=>{
    post_ApiInterfaceHandler.getAdminApiHandler(cookie_handler.getUuidcookie("uuid")).then(data => callAdminWebData(data))

})

function callAdminWebData(databaseData) {
    createApprovalListRows(databaseData)
    createOptions(databaseData)
    createEmailOptions(databaseData)
}

function createOptions(databaseData){
    databaseData.roles.forEach(role => {
        let roleOptions = document.createElement("option");
        roleOptions.innerText = role.rolename
        roleSection.append(roleOptions)
        roleSectionNewMember.append(roleOptions)
    });

}


function createEmailOptions(databaseData){
    databaseData.emails.forEach(email => {
        let emailOptions = document.createElement("option");
        emailOptions.innerText = email.useremail;
        emailDataList.append( emailOptions)
    });
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
