import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {CookieHandler  } from "../cookies-handler_script.js";

let cookie_handler = new CookieHandler();
let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();


window.addEventListener("DOMContentLoaded", () => {

    post_ApiInterfaceHandler.getTeamLeadApiHandler(cookie_handler.getUuidcookie("uuid")).then(databaseData => {
        createApprovalListRows(databaseData)
    });
    

});

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
