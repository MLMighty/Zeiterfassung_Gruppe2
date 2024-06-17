// JavaScript-Code für die Admin-Seite

// Modals holen
var createUserModal = document.getElementById('createUserModal');
var createProjectModal = document.getElementById('createProjectModal');

// Button zum Öffnen des Modals zum Benutzer anlegen
document.getElementById('createUserBtn').addEventListener('click', function() {
    createUserModal.style.display = 'block';
});

// Button zum Öffnen des Modals zum Projekt erstellen
document.getElementById('createProjectBtn').addEventListener('click', function() {
    createProjectModal.style.display = 'block';
});

// Schließen-Symbole
var closeBtns = document.getElementsByClassName('close');
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

// Formular zum Erstellen eines Benutzers
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formular-Standardaktion verhindern

    // Benutzerdaten aus dem Formular lesen
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Hier könnten weitere Validierungen oder Datenbankoperationen hinzugefügt werden

    // Beispiel: Benutzerdaten in der Konsole ausgeben
    console.log('Vorname:', firstName);
    console.log('Nachname:', lastName);
    console.log('Email:', email);
    console.log('Passwort:', password);

    // Modal schließen
    createUserModal.style.display = 'none';

    // Optional: Hier könnten weitere Aktionen nach dem Erstellen des Benutzers folgen
});

// Formular zum Erstellen eines Projekts
var projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formular-Standardaktion verhindern

    // Projektinformationen aus dem Formular lesen
    var projectName = document.getElementById('projectName').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var emailList = document.getElementById('emailList').value.split(',').map(email => email.trim());

    // Hier könnten weitere Validierungen oder Datenbankoperationen hinzugefügt werden

    // Beispiel: Projektinformationen in der Konsole ausgeben
    console.log('Projektname:', projectName);
    console.log('Startdatum:', startDate);
    console.log('Enddatum:', endDate);
    console.log('Personen:', emailList);

    // Modal schließen
    createProjectModal.style.display = 'none';

    // Optional: Hier könnten weitere Aktionen nach dem Erstellen des Projekts folgen
});

// JavaScript-Code für die Admin-Seite

// Arrays zum Speichern von Benutzern und Projekten
var users = [];
var projects = [];

// Modals holen
var createUserModal = document.getElementById('createUserModal');
var createProjectModal = document.getElementById('createProjectModal');

// Button zum Öffnen des Modals zum Benutzer anlegen
document.getElementById('createUserBtn').addEventListener('click', function() {
    createUserModal.style.display = 'block';
});

// Button zum Öffnen des Modals zum Projekt erstellen
document.getElementById('createProjectBtn').addEventListener('click', function() {
    createProjectModal.style.display = 'block';
});

// Schließen-Symbole
var closeBtns = document.getElementsByClassName('close');
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener('click', function() {
        // Modal schließen
        this.parentElement.parentElement.style.display = 'none';
        
        // Formular zurücksetzen
        resetForm(this.parentElement.parentElement);
    });
}

// Funktion zum Zurücksetzen des Formulars
function resetForm(modal) {
    var form = modal.querySelector('form');
    if (form) {
        form.reset();
    }
}

// Formular zum Erstellen eines Benutzers
var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formular-Standardaktion verhindern

    // Benutzerdaten aus dem Formular lesen
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Benutzerobjekt erstellen
    var newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    // Benutzer zum Array hinzufügen
    users.push(newUser);

    // Beispiel: Benutzerdaten in der Konsole ausgeben
    console.log('Neuer Benutzer erstellt:', newUser);

    // Modal schließen
    createUserModal.style.display = 'none';

    // Formular zurücksetzen
    resetForm(createUserModal);

    // Optional: Hier könnten weitere Aktionen nach dem Erstellen des Benutzers folgen
});

// Formular zum Erstellen eines Projekts
var projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Formular-Standardaktion verhindern

    // Projektinformationen aus dem Formular lesen
    var projectName = document.getElementById('projectName').value;
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var emailList = document.getElementById('emailList').value.split(',').map(email => email.trim());

    // Projektobjekt erstellen
    var newProject = {
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        members: emailList
    };

    // Projekt zum Array hinzufügen
    projects.push(newProject);

    // Beispiel: Projektinformationen in der Konsole ausgeben
    console.log('Neues Projekt erstellt:', newProject);

    // Modal schließen
    createProjectModal.style.display = 'none';

    // Formular zurücksetzen
    resetForm(createProjectModal);

    // Optional: Hier könnten weitere Aktionen nach dem Erstellen des Projekts folgen
});
