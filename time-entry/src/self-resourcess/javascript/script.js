import {CookieHandler  } from "../../global_dependencys/global_scripts/cookies-handler_script.js";
import {POST_ApiInterfaceHandler  } from "../../global_dependencys/global_scripts/api-handler_scripts/post-api-handler_script.js";

document.addEventListener('DOMContentLoaded', function() {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTask');
    const projectForm = document.getElementById('projectForm');
    const memberContainer = document.getElementById('memberContainer');
    const addMemberButton = document.getElementById('addMember');
    const backButton = document.getElementById('backButton');
    const projectNameInput = document.getElementById("projectName");
    const projectDescription = document.getElementById("projectDescription");
   

    let task_Inputs = [];
    let task_Description_Inputs = [];
    let member_Inputs = [];

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

 
    function removeTaskInput(event) {
        const taskInput = event.target.parentNode;
        taskContainer.removeChild(taskInput);
    }

    addTaskButton.addEventListener('click', createTaskInput);
    createTaskInput();

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


    function removeMemberInput(event) {
        const memberInput = event.target.parentNode;
        memberContainer.removeChild(memberInput);
    }
    addMemberButton.addEventListener('click', createMemberInput);


    createMemberInput();


    backButton.addEventListener('click', function() {
        window.location.href = "time-entry_Site.html";
    });

    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let cookie_handler = new CookieHandler();
        let post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
        let cookieUuid = cookieHandler.getUuidcookie("uuid");
        console.log("cookieUuid: "+  cookieUuid); //Debug Ausgabe
       
        //lösch button noch auch in arrays speichern und gucken dalls erste button angeklickt wurde wird der der input des ersten arrays z.b auch gelöscht
        
         let admin_WebData ={
            uuid:cookie_handler.getUuidcookie("uuid"),
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
