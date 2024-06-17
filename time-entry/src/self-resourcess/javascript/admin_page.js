// Sobald das DOM vollständig geladen ist, führe die Funktion aus
document.addEventListener('DOMContentLoaded', (event) => {
    // Buttons aus dem HTML-Dokument abrufen
    const userButton = document.getElementById('userButton');
    const projectButton = document.getElementById('projectButton');
    const approveButton = document.getElementById('approveButton');

    // Modals aus dem HTML-Dokument abrufen
    const userModal = document.getElementById('userModal');
    const projectModal = document.getElementById('projectModal');
    const approveModal = document.getElementById('approveModal');

    // Schließen-Schaltflächen für Modals abrufen
    const closeButtons = document.getElementsByClassName('close');

    // Funktion, um ein Modal zu öffnen
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Event-Listener für das Öffnen der Modals
    userButton.addEventListener('click', () => {
        openModal(userModal);
    });

    projectButton.addEventListener('click', () => {
        openModal(projectModal);
    });

    approveButton.addEventListener('click', () => {
        openModal(approveModal);
        populateApprovalList(); // Liste der zu genehmigenden Einträge aktualisieren
    });

    // Event-Listener für das Schließen der Modals
    for (let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener('click', (event) => {
            const modalId = event.target.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    }

    // Modals schließen, wenn außerhalb geklickt wird
    window.addEventListener('click', (event) => {
        if (event.target == userModal) {
            userModal.style.display = 'none';
        }
        if (event.target == projectModal) {
            projectModal.style.display = 'none';
        }
        if (event.target == approveModal) {
            approveModal.style.display = 'none';
        }
    });

    // Funktion zum Befüllen der Liste mit zu genehmigenden Einträgen
    function populateApprovalList() {
        // Simulierte Daten für Demonstration
        const approvals = [
            { id: 1, title: 'Genehmigen: Eintrag 1' },
            { id: 2, title: 'Genehmigen: Eintrag 2' },
            { id: 3, title: 'Genehmigen: Eintrag 3' }
        ];

        const approvalList = document.getElementById('approvalList');
        approvalList.innerHTML = ''; // Vorherige Einträge löschen

        approvals.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = entry.title;
            
            // Genehmigen-Schaltfläche
            const approveButton = document.createElement('button');
            approveButton.textContent = 'Genehmigen';
            approveButton.classList.add('approveButton');
            approveButton.addEventListener('click', () => {
                approveEntry(entry.id);
                li.remove(); // Nach Genehmigung aus Liste entfernen
            });
            li.appendChild(approveButton);

            // Ablehnen-Schaltfläche
            const rejectButton = document.createElement('button');
            rejectButton.textContent = 'Ablehnen';
            rejectButton.classList.add('rejectButton');
            rejectButton.addEventListener('click', () => {
                rejectEntry(entry.id);
                li.remove(); // Nach Ablehnung aus Liste entfernen
            });
            li.appendChild(rejectButton);

            approvalList.appendChild(li);
        });
    }

    // Funktion zur Simulation der Genehmigung eines Eintrags
    function approveEntry(entryId) {
        addActionToLog(`Eintrag ${entryId} genehmigt`);
        // Hier könnten weitere Aktionen bei Genehmigung ausgeführt werden
    }

    // Funktion zur Simulation der Ablehnung eines Eintrags
    function rejectEntry(entryId) {
        addActionToLog(`Eintrag ${entryId} abgelehnt`);
        // Hier könnten weitere Aktionen bei Ablehnung ausgeführt werden
    }

    // Funktion zum Hinzufügen einer Aktion zum Aktionsprotokoll
    function addActionToLog(action) {
        const logList = document.getElementById('logList');
        const logItem = document.createElement('li');
        logItem.textContent = action;
        logList.appendChild(logItem);
    }
});
