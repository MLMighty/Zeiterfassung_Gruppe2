document.addEventListener('DOMContentLoaded', () => {
    // Konstanten und Variablen
    const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const viewSelection = document.getElementById("viewSelection");
    const tableViewInfo = document.getElementById('tableViewInfo');
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const clock = document.getElementById("clock");
    const today = new Date();
    let currentWeek = getWeekNumber(today);
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
  
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
  
    // Variablen für Tabellenansicht
    let tableData = []; // Array für die Tabellenzeilen
  
    // Eventlistener
    document.getElementById("logOut").addEventListener('click', deleteCookie); 
    document.getElementById("editTime").addEventListener('click', navigateToTimeEntryPage);
    document.getElementById("backButton").addEventListener('click', navigateToMainPage);
    document.getElementById("adminPage").addEventListener('click', navigateToAdminPage);
    document.getElementById("teamleadPage").addEventListener('click', navigateToTeamLeadPage);
    viewSelection.addEventListener('change', updateTableViewInfo);
    prevButton.addEventListener('click', handlePrevButton);
    nextButton.addEventListener('click', handleNextButton);
  
    // Funktionen
    function renderTableHeader() {
      tableHead.innerHTML = `
        <tr>
          <th>Datum</th>
          <th>Start</th>
          <th>Ende</th>
          <th>Ist</th>
          <th>Soll</th>
          <th>Projekt</th>
          <th>Tätigkeit</th>
          <th>freigegeben</th>
        </tr>
      `;
    }
  
    function getFirstDayOfWeek(date) {
      const dayOfWeek = date.getDay();
      const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
      return new Date(date.setDate(diff));
    }
  
    function getWeekNumber(date) {
      const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
      const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
      return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
  
    function updateTableViewInfo() {
      const view = viewSelection.value;
      switch (view) {
        case "weekView":
          tableViewInfo.textContent = `KW ${currentWeek} ${currentYear}`;
          break;
        case "monthView":
          tableViewInfo.textContent = `${padNumber(currentMonth + 1)}.${currentYear}`;
          break;
        case "quarterView":
          const currentQuarter = calculateQuarter(currentMonth + 1);
          tableViewInfo.textContent = `Q${currentQuarter} ${currentYear}`;
          break;
        case "yearView":
          tableViewInfo.textContent = `${currentYear}`;
          break;
      }
    }
  
    function handlePrevButton() {
      const view = viewSelection.value;
      switch (view) {
        case "weekView":
          currentWeek--;
          if (currentWeek < 1) {
            currentWeek = 52;
            currentYear--;
          }
          break;
        case "monthView":
          currentMonth--;
          if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
          }
          break;
        case "quarterView":
          const previousQuarter = calculateQuarter(currentMonth - 2);
          if (previousQuarter === 4) currentYear--;
          currentMonth -= 3;
          if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
          }
          break;
        case "yearView":
          currentYear--;
          break;
      }
      updateTableViewInfo();
    }
  
    function handleNextButton() {
      const view = viewSelection.value;
      switch (view) {
        case "weekView":
          currentWeek++;
          if (currentWeek > 52) {
            currentWeek = 1;
            currentYear++;
          }
          break;
        case "monthView":
          currentMonth++;
          if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
          }
          break;
        case "quarterView":
          const nextQuarter = calculateQuarter(currentMonth + 4);
          if (nextQuarter === 1) currentYear++;
          currentMonth += 3;
          if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
          }
          break;
        case "yearView":
          currentYear++;
          break;
      }
      updateTableViewInfo();
    }
  
    function calculateQuarter(month) {
      return Math.ceil(month / 3);
    }
  
    function setWeekDay() {
      document.getElementById("weekDay").innerHTML = weekdays[today.getDay()];
    }
  
    function setDateText() {
      const [day, month, year] = today.toLocaleDateString().split(".");
      document.getElementById("fullDate").innerHTML = `${padNumber(day)}.${padNumber(month)}.${year}`;
    }
  
    function startTime() {
      const d = new Date();
      const h = padNumber(d.getHours());
      const m = padNumber(d.getMinutes());
      const s = padNumber(d.getSeconds());
      clock.innerHTML = `${h}:${m}:${s}`;
      setTimeout(startTime, 1000);
    }
  
    function padNumber(num) {
      return num.toString().padStart(2, '0');
    }
  
    function navigateToMainPage() {
      window.location.href = "time-entry_Site.html";
    }
    function navigateToTimeEntryPage() {
      window.location.href = "edit-time_Site.html";
    }
    function navigateToAdminPage() {
      window.location.href = "admin-main_Site.html";
    }
    function navigateToTeamLeadPage() {
      window.location.href = "teamlead_Site.html";
    }

    function deleteCookie(){
      document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
      document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';

      window.location = "time-entry_Site.html";;
    }


  
    // Initialisierung
    updateTableViewInfo();
    startTime();
    setWeekDay();
    setDateText();
    renderTableHeader();
  });
  // Delete
  function renderTableBody(data) {
    var tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // leert den aktuellen Inhalt

    data.forEach(function(entry) {
        var row = document.createElement('tr');

        // Beispiel: Fülle die Zeile mit Daten aus dem 'entry'-Objekt
        var columns = ['datum', 'start', 'ende', 'ist', 'soll', 'projekt', 'tätigkeit', 'freigegeben'];
        columns.forEach(function(column) {
            var cell = document.createElement('td');
            cell.textContent = entry[column]; // annehmen, dass 'entry' ein Objekt ist
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}
//Bespieldaten
var exampleData = [
  { datum: '2024-06-18', start: '09:00', ende: '17:00', ist: '8', soll: '8', projekt: 'Projekt A', tätigkeit: 'Entwicklung', freigegeben: 'Ja' },
  { datum: '2024-06-19', start: '09:30', ende: '18:00', ist: '8.5', soll: '8', projekt: 'Projekt B', tätigkeit: 'Design', freigegeben: 'Nein' }
];

// Beispielaufruf der Funktion, um die Tabelle mit den Beispieldaten zu aktualisieren

