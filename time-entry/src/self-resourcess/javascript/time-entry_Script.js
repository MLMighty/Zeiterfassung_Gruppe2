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


    function renderTableHeaderDE(){
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
                tableViewInfo.textContent = `${checkTime(currentMonth +1)}.${today.getFullYear()}`;
              break;
            case "quarterView":
              // code block
              break;
            case "yearView":
                // code block
                break;
          }
    });

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
                // code block
                break;
              case "yearView":
                  // code block
                  break;
              //default:
        }
    });

    nextButton.addEventListener('click', () => {
        
        var e = viewSelection.value; //get Value of viewSelection to adapt function of buttons to one week/month/quarter/year ahead
        switch(e){
            case "weekView":
                currentWeek++;
                if (currentWeek > 52) {
                    currentWeek = 1;
                    currentYear++;
                }
                tableViewInfo.textContent = `KW ${currentWeek} ${currentYear}`
              break;
            
            case "monthView":
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                tableViewInfo.textContent = `${checkTime(currentMonth+1)}.${currentYear}`
                break;
            
            case "quarterView":
                // code block
                break;
              case "yearView":
                  // code block
                  break;
              //default:
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
        renderTableHeaderDE();
    }

    callFunctions();
});