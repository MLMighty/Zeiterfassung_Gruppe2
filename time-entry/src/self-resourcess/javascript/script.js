import {CookieHandler  } from "../../global_dependencys/global_scripts/cookies-handler_script.js";
import {POST_ApiInterfaceHandler  } from "../../global_dependencys/global_scripts/api-handler_scripts/post-api-handler_script.js";

document.addEventListener('DOMContentLoaded', function() {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTask');
    const projectForm = document.getElementById('projectForm');
    const memberContainer = document.getElementById('memberContainer');
    const addMemberButton = document.getElementById('addMember');
    const approvalList = document.getElementById('approvalList');
    const backButton = document.getElementById('backButton');
    const projectNameInput = document.getElementById("projectName");
    const projectDescription = document.getElementById("projectDescription");
   

    let task_Inputs = [];
    let task_Description_Inputs = [];
    let member_Inputs = [];


    // Variablen für Mitarbeiterdaten
    let employeeFirstName;
    let employeeLastName;
    let employeeEmail;
    let employeePassword;

    // Variablen für Projektdaten
    let projectName;
    let projectInfo;
    let projectStartDate;
    let projectEndDate;
    let projectMembers = [];
    let projectTasks = [];

    // Funktion zum Erstellen eines neuen Tätigkeitseintrags
    function createTaskInput() {
        const taskInput = document.createElement('div');
        taskInput.classList.add('taskInput');

        const taskNameInput = document.createElement('input');
        taskNameInput.type = 'text';
        taskNameInput.name = 'taskName';
        taskNameInput.placeholder = 'Tätigkeit';
        taskNameInput.required = true;
        task_Inputs.push(taskNameInput);

        const taskInfoInput = document.createElement('input');
        taskInfoInput.type = 'text';
        taskInfoInput.name = 'taskInfo';
        taskInfoInput.placeholder = 'Beschreibung';
        taskInfoInput.required = false;
        task_Description_Inputs.push(taskInfoInput);


        const removeTaskButton = document.createElement('button');
        removeTaskButton.type = 'button';
        removeTaskButton.classList.add('removeTask');
        removeTaskButton.textContent = 'Entfernen';
        removeTaskButton.addEventListener('click', removeTaskInput);

        taskInput.appendChild(taskNameInput);
        taskInput.appendChild(taskInfoInput);
        taskInput.appendChild(removeTaskButton);

        taskContainer.appendChild(taskInput);
    }

    // Funktion zum Entfernen eines Tätigkeitseintrags
    function removeTaskInput(event) {
        const taskInput = event.target.parentNode;
        taskContainer.removeChild(taskInput);
    }

    // Ereignislistener für das Hinzufügen einer neuen Tätigkeit
    addTaskButton.addEventListener('click', createTaskInput);

    // Erstelle eine erste Tätigkeit beim Laden der Seite
    createTaskInput();

    // Funktion zum Erstellen eines neuen Eingabefelds für Mitarbeiter-E-Mail
    function createMemberInput() {
        const memberInput = document.createElement('div');
        memberInput.classList.add('member-input');

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'projectMembers';
        emailInput.required = true;
        member_Inputs.push(emailInput);

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Entfernen';
        removeButton.addEventListener('click', removeMemberInput);

        memberInput.appendChild(emailInput);
        memberInput.appendChild(removeButton);
        memberContainer.appendChild(memberInput);
    }

    // Funktion zum Entfernen eines Eingabefelds für Mitarbeiter-E-Mail
    function removeMemberInput(event) {
        const memberInput = event.target.parentNode;
        memberContainer.removeChild(memberInput);
    }

    // Ereignislistener für das Hinzufügen eines neuen Mitarbeiters
    addMemberButton.addEventListener('click', createMemberInput);

    // Erstelle ein erstes Eingabefeld für Mitarbeiter-E-Mail beim Laden der Seite
    createMemberInput();

    // Funktion zum Genehmigen eines Eintrags
    function approveEntry(entry) {
        console.log(`Eintrag genehmigt: ${entry.employee} - ${entry.project} - ${entry.task}`);

        // Entferne den genehmigten Eintrag aus dem approvalEntries-Array
        approvalEntries = approvalEntries.filter(e => e !== entry);

        // Aktualisiere die Tabelle mit den verbleibenden Einträgen
        renderApprovalEntries(approvalEntries);
    }

    // Funktion zum Ablehnen eines Eintrags
    function rejectEntry(entry) {
        console.log(`Eintrag abgelehnt: ${entry.employee} - ${entry.project} - ${entry.task}`);

        // Entferne den abgelehnten Eintrag aus dem approvalEntries-Array
        approvalEntries = approvalEntries.filter(e => e !== entry);

        // Aktualisiere die Tabelle mit den verbleibenden Einträgen
        renderApprovalEntries(approvalEntries);
    }

    // Funktion zum Rendern der zu genehmigenden Einträge in der Tabelle
   

    // Beispiel: Abrufen von Dummy-Daten für die Genehmigungsliste
    function fetchApprovalEntries() {
        const dummyEntries = [
            { date: '2023-06-01', employee: 'Max Mustermann', project: 'Projekt A', task: 'Aufgabe 1', hours: 4 },
            { date: '2023-06-02', employee: 'Anna Musterfrau', project: 'Projekt B', task: 'Aufgabe 2', hours: 6 },
            { date: '2023-06-03', employee: 'Peter Beispiel', project: 'Projekt C', task: 'Aufgabe 3', hours: 3 },
        ];

        return dummyEntries;
    }



    // Zurück zur Hauptseite navigieren
    backButton.addEventListener('click', function() {
        window.location.href = "time-entry_Site.html";
    });

    // Ereignislistener für das Erstellen eines Projekts
    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let cookieHandler = new CookieHandler();
        let post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        let cookieUuid = cookieHandler.getUuidcookie("uuid");
        console.log("cookieUuid: "+  cookieUuid); //Debug Ausgabe
       
        //lösch button noch auch in arrays speichern und gucken dalls erste button angeklickt wurde wird der der input des ersten arrays z.b auch gelöscht
        
         let admin_WebData ={
            projectname:projectNameInput.value ,
            projectdescription:projectDescription.value,
            projectaddedworker: [],
            tasksinfo:[],

            uuid: cookieUuid.replace(/"/g, ''),

         }

         for (let i = 0; i < task_Inputs.length; i++) {
            admin_WebData.tasksinfo.push({
                taskname: task_Inputs[i].value,
                taskdescription: task_Description_Inputs[i].value
            })
        }
        
        for (let i = 0; i < member_Inputs.length; i++) {
            admin_WebData.projectaddedworker.push(
                {workeremail: member_Inputs[i].value}
            )
        }


        post_ApiInterfaceHandler.adminWebDataApiHandler(admin_WebData)
        projectForm.reset();

        // Vorhandene Aufgaben- und Mitgliederfelder entfernen
        taskContainer.innerHTML = '';
        memberContainer.innerHTML = '';

        // Neue leere Eingabefelder für Aufgaben und Mitglieder hinzufügen
        createTaskInput();
        createMemberInput();
    });


});