document.addEventListener('DOMContentLoaded', function() {
    const taskContainer = document.getElementById('taskContainer');
    const addTaskButton = document.getElementById('addTask');
    const projectForm = document.getElementById('projectForm');
    const memberContainer = document.getElementById('memberContainer');
    const addMemberButton = document.getElementById('addMember');

    // Variablen für Mitarbeiterdaten
    let employeeFirstName;
    let employeeLastName;
    let employeeEmail;
    let employeePassword;

    // Variablen für Projektdaten
    let projectName;
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

        const taskStartDateInput = document.createElement('input');
        taskStartDateInput.type = 'date';
        taskStartDateInput.name = 'taskStartDate';
        taskStartDateInput.required = true;

        const taskEndDateInput = document.createElement('input');
        taskEndDateInput.type = 'date';
        taskEndDateInput.name = 'taskEndDate';
        taskEndDateInput.required = true;

        const removeTaskButton = document.createElement('button');
        removeTaskButton.type = 'button';
        removeTaskButton.classList.add('removeTask');
        removeTaskButton.textContent = 'Entfernen';
        removeTaskButton.addEventListener('click', removeTaskInput);

        taskInput.appendChild(taskNameInput);
        taskInput.appendChild(taskStartDateInput);
        taskInput.appendChild(taskEndDateInput);
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

    document.getElementById("backButton").addEventListener('click', navigateHome);
    function navigateHome() {
        window.location.href = "time-entry_Site.html";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const approvalList = document.getElementById('approvalList');
    const backButton = document.getElementById('backButton');

    // Variablen für die Genehmigungsliste
    let approvalEntries = [];

    // Funktion zum Abrufen der zu genehmigenden Einträge (Beispiel mit Dummy-Daten)
    function fetchApprovalEntries() {
        const dummyEntries = [
            { date: '2023-06-01', employee: 'Max Mustermann', project: 'Projekt A', task: 'Aufgabe 1', hours: 4 },
            { date: '2023-06-02', employee: 'Anna Musterfrau', project: 'Projekt B', task: 'Aufgabe 2', hours: 6 },
            { date: '2023-06-03', employee: 'Peter Beispiel', project: 'Projekt C', task: 'Aufgabe 3', hours: 3 },
        ];

        return dummyEntries;
    }

    // Funktion zum Rendern der zu genehmigenden Einträge in der Tabelle
    function renderApprovalEntries(entries) {
        approvalList.innerHTML = '';

        entries.forEach(entry => {
            const row = document.createElement('tr');

            const dateCell = document.createElement('td');
            dateCell.textContent = entry.date;
            row.appendChild(dateCell);

            const employeeCell = document.createElement('td');
            employeeCell.textContent = entry.employee;
            row.appendChild(employeeCell);

            const projectCell = document.createElement('td');
            projectCell.textContent = entry.project;
            row.appendChild(projectCell);

            const taskCell = document.createElement('td');
            taskCell.textContent = entry.task;
            row.appendChild(taskCell);

            const hoursCell = document.createElement('td');
            hoursCell.textContent = entry.hours;
            row.appendChild(hoursCell);

            const approveCell = document.createElement('td');
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Genehmigen';
            approveButton.addEventListener('click', () => approveEntry(entry));
            approveCell.appendChild(approveButton);
            row.appendChild(approveCell);

            const rejectCell = document.createElement('td');
            const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Ablehnen';
            rejectButton.addEventListener('click', () => rejectEntry(entry));
            rejectCell.appendChild(rejectButton);
            row.appendChild(rejectCell);

            approvalList.appendChild(row);
        });
    }


    
    // Funktion zum Genehmigen eines Eintrags (Beispiel)
    function approveEntry(entry) {
        console.log(`Eintrag genehmigt: ${entry.employee} - ${entry.project} - ${entry.task}`);
        // Hier kannst du die Logik zum Genehmigen des Eintrags implementieren
    }

    // Funktion zum Ablehnen eines Eintrags (Beispiel)
    function rejectEntry(entry) {
        console.log(`Eintrag abgelehnt: ${entry.employee} - ${entry.project} - ${entry.task}`);
        // Hier kannst du die Logik zum Ablehnen des Eintrags implementieren
    }


    // Initialisierung
    approvalEntries = fetchApprovalEntries();
    renderApprovalEntries(approvalEntries);
});
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