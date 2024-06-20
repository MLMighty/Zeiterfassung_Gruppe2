import { SignUpHandler } from "../../global_dependencys/global_scripts/regristration_scripts/sign-up-handler_script.js";
import {POST_ApiInterfaceHandler  } from "../../global_dependencys/global_scripts/api-handler_scripts/post-api-handler_script.js";
import { CookieHandler } from "../../global_dependencys/global_scripts/cookies-handler_script.js";

document.addEventListener('DOMContentLoaded', () => {
    // Konstanten und Variablen
    const weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    const viewSelection = document.getElementById("viewSelection");
    const tableViewInfo = document.getElementById('tableViewInfo');
    const tableHead = document.getElementById('tableHead');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const clock = document.getElementById("clock");
    const today = new Date();
    let currentWeek = getWeekNumber(today);
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();


  
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
          <th>Differenz</th>
          <th>Projekt</th>
          <th>Tätigkeit</th>
          <th>freigegeben</th>
        </tr>
      `;
    }

  // Excel file download
  // bin ehrlich.. Magic Code wegen Zeitdruck. Aber funktioniert, let's gooooooooooooooo  
  const exportExcelButton = document.getElementById("exportExcel");

  exportExcelButton.addEventListener("click", () => {
  const table = document.getElementById("table");
  const rows = table.rows;
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.table_to_sheet(table);

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  const arrayBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
  const blob = new Blob([arrayBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "export.xlsx";
  link.click();
});  

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

    //////////////////////////////////////////
  
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


  
   
    updateTableViewInfo();
    startTime();
    setWeekDay();
    setDateText();
    renderTableHeader();
  });

///////////////////////////////////////////////////////
let cookie_handler = new CookieHandler();
  export function signUpNewWorker(){
    let signUpApiHandler = new SignUpHandler();
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
      let cookieUuid = cookie_handler.getUuidcookie("uuid");
  
    const forwardingSignUpData = {
      uuid: cookieUuid.replace(/"/g, ''),
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
  }
  
     signUpApiHandler.signUpDataTransfer(forwardingSignUpData);
  
  }


  let role_selection ;
  export function forwardingCreatedRole(event){
    event.preventDefault();
    let roleSelections =  document.getElementById("roleSelection");
    role_selection = roleSelections.value;

  }


  export function createRole(){
    let post_ApiInterfaceHandler = new POST_ApiInterfaceHandler();
    let rolename = document.getElementById("roleName");
    let role_description = document.getElementById("role-description");
   

  
  
    const forwardingCreatedRoleData = {
      uuid:cookie_handler.getUuidcookie("uuid"),
      rolename: rolename.value,
      roledescription: role_description.value,
      permissionrights: role_selection.value,
    }
    post_ApiInterfaceHandler.roleApiHandler(forwardingCreatedRoleData)

  
  }







