import {POST_ApiInterfaceHandler  } from "../api-handler_scripts/post-api-handler_script.js";
import {CookieHandler  } from "../cookies-handler_script.js";
import {GET_ApiInterfaceHandler  } from "../api-handler_scripts/get-api-handler_script.js";

let post_ApiInterfaceHandler =  new  POST_ApiInterfaceHandler();
let get_ApiInterfaceHandler =  new  GET_ApiInterfaceHandler();
let cookie_handler = new CookieHandler();



window.addEventListener("DOMContentLoaded", () => {
    let cookieUuid = cookie_handler.getUuidcookie("uuid");
    get_ApiInterfaceHandler.getAbscenceApiHandler().then(databaseData =>  createApprovalListRows(databaseData))

});

function createApprovalListRows(databaseData) {
    console.log(databaseData);
    const approvalList = document.getElementById('approvalList');

    for (let index = 0; index < databaseData.length; index++) {
        const entry = databaseData[index];
        
        const tr = document.createElement('tr');

        // Konvertiere die Datumsfelder
        const absencestart = formatDate(entry.absencestart);
        const absenceend = formatDate(entry.absenceend);

        tr.innerHTML = `
            <td>${absencestart}</td>
            <td>${absenceend}</td>
            <td>${entry.absencetype}</td>
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
    }
}

function formatDate(isoDateString) {
    let date = new Date(isoDateString);

    let year = date.getUTCFullYear();
    let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    let day = date.getUTCDate().toString().padStart(2, '0');
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
