document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('table');
    const monthYearDisplay = document.getElementById('month-year');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');
    const clock = document.getElementById("clock");
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    //function to render table in monthView
    function renderMonthTable(month, year) {

        const firstDay = new Date(year, month).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const tableHead = table.querySelector('thead')
        const tableBody = table.querySelector('tbody');

        tableHead.innerHTML =`<tr>
                                    <th>Sun</th>
                                    <th>Mon</th>
                                    <th>Tue</th>
                                    <th>Wed</th>
                                    <th>Thu</th>
                                    <th>Fri</th>
                                    <th>Sat</th>
                              </tr>`
        tableBody.innerHTML = '';
        monthYearDisplay.textContent = `${String(month + 1).padStart(2, '0')}.${year}`;

        let date = 1;
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');
                if (i === 0 && j < firstDay) {
                    cell.innerHTML = '';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    cell.innerHTML = `<span id="cell${date}" class="date">${date}</span>`; //set id to cells for easier adress
                    cell.setAttribute('data-date', `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`);
                    let dateObject = new Date(cell.getAttribute('data-date'))
                    let currentDate = new Date();
                    if (currentDate.toLocaleDateString() === dateObject.toLocaleDateString()){
                        cell.classList.add("bg"); //highlight the current day
                    }
                    date++;
                }
                row.appendChild(cell);
            }

            tableBody.appendChild(row);
        }

        //fetchTableData(month + 1, year);
    }

    //generates table based on the view option chosen
    function genView(value){
        switch(value) {
            case "weekView":
              // code block
              break;
            case "monthView":
                renderMonthTable(currentMonth, currentYear);
              break;
            case "quarterView":
              // code block
              break;
            case "yearView":
                // code block
                break;
            default:
                renderMonthTable(currentMonth, currentYear);
          }
    }

    prevMonthButton.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderMonthTable(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderMonthTable(currentMonth, currentYear);
    });

    function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        clock.innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    function setWeekDay(){
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        const d = new Date();
        let day = weekday[d.getDay()];
        document.getElementById("weekDay").innerHTML = day;
    }

    function setDateText(){
        const d = new Date();
        let myArray = d.toLocaleDateString().split(".");
        for (let i = 0; i < myArray.length ; i++){
            myArray[i]=checkTime(myArray[i]); 
        }
        document.getElementById("fullDate").innerHTML = myArray[0] + "." + myArray[1] + "." + myArray[2];
    }

    function callFunctions(){
        startTime();
        renderMonthTable(currentMonth, currentYear);
        setWeekDay();
        setDateText();
    }

    callFunctions();
});