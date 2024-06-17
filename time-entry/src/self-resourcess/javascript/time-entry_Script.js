document.addEventListener('DOMContentLoaded', () => {
    //set important values for functions
    const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Sonntag"];
    const monthNames = [ "Januar", "Februar", "März", "April", "Mai", "Juni",
                         "Juli", "August", "September", "Oktober", "November", "Dezember" ];
    //const table = document.getElementById('table');
    const viewSelection = document.getElementById("viewSelection")
    const tableViewInfo = document.getElementById('tableViewInfo');
    const tableHead = document.getElementById('tableHead');
    const tableBody = document.getElementById('tableBody');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const clock = document.getElementById("clock");
    const today = new Date();
    const week = getWeekNumber(today);
    let currentWeek = week;
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();


    document.getElementById("editTime").addEventListener('click', () => { navigateToPage2()});
    document.getElementById("adminPage").addEventListener('click', () => { navigateToPagAdminPage()});
    


    /*document.getElementById("commitAway").addEventListener('click', () => { openModal()});
    function openModal() {
        document.getElementById('myModal').style.display = 'block';
    }
    
    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }
    
    window.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    document.getElementsByClassName('close')[0].onclick = function() {
        closeModal();
    }*/

    function renderTableHeader(){
        tableHead.innerHTML =`<tr>
                                <th>Datum</th>
                                <th>Start</th>
                                <th>Ende</th>
                                <th>Ist</th>
                                <th>Soll</th>
                                <th>Projekt</th>
                                <th>Tätigkeit</th>
                                <th>freigegeben</th>
                              </tr>`;
    }
    
    function getFirstDayOfWeek(date) {
        const dayOfWeek = date.getDay();
        const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0? -6 : 1);
        return new Date(date.setDate(diff));
    }
    
    function getWeekNumber(date) {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7); //math.ceil rundet
    }
    

    //generates table based on the view option chosen
    viewSelection.addEventListener('change', (event)=> {
        e = viewSelection.value;
        switch(e) {
            case "weekView":
                tableViewInfo.textContent = `KW ${week} ${today.getFullYear()}`;
              break;
            case "monthView":
                tableViewInfo.textContent = `${checkTime(today.getMonth() +1)}.${today.getFullYear()}`;
              break;
            case "quarterView":
                const currentQuarter = berechneQuartal(today.getMonth() + 1);
                tableViewInfo.textContent = `Q${currentQuarter} ${today.getFullYear()}`;
                break;
            case "yearView":
                tableViewInfo.textContent = `${today.getFullYear()}`;
            break;
          }
    });
            // DOM-Elemente
        const startTimeBtn = document.getElementById('startTime');
        const endTimeBtn = document.getElementById('endTime');
        const timerDisplay = document.getElementById('timer');

        let timerInterval; // Variable für den Timer-Intervall

        startTimeBtn.addEventListener('click', function() {
            startTimeBtn.disabled = true; // Start-Button deaktivieren
            endTimeBtn.disabled = false; // Stopp-Button aktivieren
            let seconds = 0;

            // Starte Timer
            timerInterval = setInterval(function() {
                seconds++;
                timerDisplay.textContent = formatTime(seconds);
            }, 1000);
        });

        endTimeBtn.addEventListener('click', function() {
            endTimeBtn.disabled = true; // Stopp-Button deaktivieren
            startTimeBtn.disabled = false; // Start-Button aktivieren
            clearInterval(timerInterval); // Timer-Intervall stoppen
            timerDisplay.textContent = ''; // Timer-Anzeige zurücksetzen
        });

        // Funktion zur Formatierung der Zeit (z.B. 00:00:00)
        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }


    prevButton.addEventListener('click', () => {
        var e = viewSelection.value; //get Value of viewSelection to adapt function of buttons to one week/month/quarter/year before
        switch(e){
            case "weekView":
                currentWeek--;
                if (currentWeek < 1) {
                    currentWeek = 52;
                    currentYear--;
                }
                tableViewInfo.textContent = `KW ${currentWeek} ${currentYear}`
                break;
            
            case "monthView":
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                tableViewInfo.textContent = `${checkTime(currentMonth+1)}.${currentYear}`
                break;
            
            case "quarterView":
                const previousQuarter = berechneQuartal(currentMonth - 3 + 1);
                if (previousQuarter === 4) currentYear--;
                currentMonth -= 3;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                tableViewInfo.textContent = `Q${previousQuarter} ${currentYear}`;
                break;

            case "yearView":
                currentYear--;
                tableViewInfo.textContent = `${currentYear}`;
                break;
        }
    });
    function berechneQuartal(monat) {
        let quartal;
        if (monat >= 1 && monat <= 3) {
            quartal = 1;
        } else if (monat >= 4 && monat <= 6) {
            quartal = 2;
        } else if (monat >= 7 && monat <= 9) {
            quartal = 3;
        } else if (monat >= 10 && monat <= 12) {
            quartal = 4;
        }
        return quartal;
    }

    nextButton.addEventListener('click', () => {
        
        var e = viewSelection.value; //get Value of viewSelection to adapt function of buttons to one week/month/quarter/year ahead
        switch(e){
            case "weekView":
                currentWeek++;
                if (currentWeek > 52) {
                    currentWeek = 1;
                    currentYear++;
                }
                tableViewInfo.textContent = `KW ${currentWeek} ${currentYear}`;
                break;
            
            case "monthView":
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                tableViewInfo.textContent = `${checkTime(currentMonth+1)}.${currentYear}`;
                break;
            
            case "quarterView":
                const nextQuarter = berechneQuartal(currentMonth + 3 + 1);
                if (nextQuarter === 1) currentYear++;
                currentMonth += 3;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                tableViewInfo.textContent = `Q${nextQuarter} ${currentYear}`;
                break;

            case "yearView":
                currentYear++;
                tableViewInfo.textContent = `${currentYear}`;
                break;
        }
        
    });

    //sets text for the week Day in top container
    function setWeekDay(){
        let day = weekday[today.getDay()];
        document.getElementById("weekDay").innerHTML = day;
    }

    //set text for date in top container
    function setDateText(){
        let myArray = today.toLocaleDateString().split(".");
        for (let i = 0; i < myArray.length ; i++){
            myArray[i]=checkTime(myArray[i]); 
        }
        document.getElementById("fullDate").innerHTML = myArray[0] + "." + myArray[1] + "." + myArray[2];
    }

    //starts clock for top container
    function startTime() {
        let d = new Date()
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        clock.innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
    }

    //checkTime for numbers < 10 to add a 0 in front
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    //calls all important functions at start
    function callFunctions(){
        tableViewInfo.textContent = `${checkTime(currentMonth + 1)}.${currentYear}` //standardmäßig Monat
        startTime();
        setWeekDay();
        setDateText();
        renderTableHeader();
    }

    callFunctions();
        
    function navigateToTimePage() {
        window.location.href = "edit_time.html";
    }

    function navigateToPagAdminPage() {


        window.location.href = "admin_page.html";
    }

    
});

let startTime;
let timeInfo;
let timerInterval;
let running = false;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startTime');
const stopButton = document.getElementById('endTime');

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
timeInfo = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  return timeInfo
}

startButton.addEventListener('click', () => {
  if (!running) {
    running = true;
    startTime = Date.now();

    // Start updating timer display every second
    timerInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      timerDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

stopButton.addEventListener('click', () => {
  if (running) {
    running = false;
    console.log(timeInfo)
    clearInterval(timerInterval);
  }
});
