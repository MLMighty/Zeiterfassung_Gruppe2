import { GET_ApiInterfaceHandler } from "../api-handler_scripts/get-api-handler_script.js";

let get_ApiInterfaceHandler = new GET_ApiInterfaceHandler();
let databaseData = {
    roles:[
        {
            role:"Admin",
            task_id:2
        },
        {
            taskvalue:"EzrasHibernate",
            task_id:3
        },
        {
            taskvalue:"Entwickler",
            task_id:3
        },
        {
            taskvalue:"Teamlead",
            task_id:3
        }
    ],

    approvals: [
        { datum: '2024-06-19', mitarbeiter: 'Max Mustermann', projekt: 'Projekt A', taetigkeit: 'Programmierung', stunden: '8' },
        { datum: '2024-06-20', mitarbeiter: 'Anna Müller', projekt: 'Projekt B', taetigkeit: 'Testing', stunden: '8' },
        { datum: '2024-06-21', mitarbeiter: 'John Doe', projekt: 'Projekt C', taetigkeit: 'Design', stunden: '6' },
        { datum: '2024-06-22', mitarbeiter: 'Jane Smith', projekt: 'Projekt D', taetigkeit: 'Dokumentation', stunden: '7' },
        { datum: '2024-06-23', mitarbeiter: 'Hans Schmidt', projekt: 'Projekt E', taetigkeit: 'Planung', stunden: '5' }
    ]
};

window.addEventListener("DOMContentLoaded", () => {
    // Hier würde normalerweise die API-Anfrage stehen, um Daten abzurufen
    // get_ApiInterfaceHandler.getTeamLeadApiHandler().then(data => {
    //     createApprovalListRows(data)
    // });
    
    createApprovalListRows();
});

function createApprovalListRows() {
    const approvalList = document.getElementById('approvalList');

    databaseData.approvals.forEach(entry => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${entry.datum}</td>
            <td>${entry.mitarbeiter}</td>
            <td>${entry.projekt}</td>
            <td>${entry.taetigkeit}</td>
            <td>${entry.stunden}</td>
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
