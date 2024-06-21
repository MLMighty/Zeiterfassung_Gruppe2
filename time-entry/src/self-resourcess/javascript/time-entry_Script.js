
let events = []; // Array für die Kalenderereignisse

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
}
document.getElementById("logOut").addEventListener('click', deleteCookie); 
    
function deleteCookie(){
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
    document.cookie = 'uuid=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';

    window.location = "time-entry_Site.html";;
  }


$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        defaultView: 'month',
        editable: true,
        events: events, // Verwende das events-Array als Datenquelle
        eventClick: function(event) {
            // Öffne das Modal und fülle die Felder mit den Event-Daten
            $('#start').val(event.start.format('YYYY-MM-DD'));
            $('#end').val(event.end ? event.end.format('YYYY-MM-DD') : event.start.format('YYYY-MM-DD'));
            $('#selection').val(event.title);
            
            // Speichere die Event-ID
            $('#eventForm').data('eventId', event._id);

            // Zeige den Löschen-Button an
            $('#deleteEventButton').show();

            // Öffne das Modal
            openModal();
        }
    });

    $('#monthView').on('click', function() {
        $('#calendar').fullCalendar('changeView', 'month');
    });

    $('#weekView').on('click', function() {
        $('#calendar').fullCalendar('changeView', 'agendaWeek');
    });

    $('#dayView').on('click', function() {
        $('#calendar').fullCalendar('changeView', 'agendaDay');
    });


    function openModal() {
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        
        modal.style.display = "block";
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    window.openModal = openModal; // Macht die Funktion global zugänglich

    // Ereignis einfügen oder bearbeiten
    $('#eventForm').submit(function(event) {
        event.preventDefault();
        
        var startDate = $('#start').val();
        var endDate = $('#end').val();
        var eventType = $('#selection').val();
        var eventColor = '';

        switch (eventType) {
            case 'Urlaub':
                eventColor = '#1ca800';
                break;
            case 'Sonderurlaub':
                eventColor = '#CC2200';
                break;
            case 'Gleittag':
                eventColor = '#a87000';
                break;
            case 'Krankheit mit Attest':
                eventColor = '#D919FF';
                break;
            case 'Krankheit ohne Attest':
                eventColor = '#FF1966';
                break;
            case 'Dienstreise':
                eventColor = '#3377FF';
                break;
        }

        var calendar = $('#calendar');
        var eventId = $('#eventForm').data('eventId');

        if (startDate && endDate && eventType) {
            if (eventId) {
                // Ereignis bearbeiten
                var event = calendar.fullCalendar('clientEvents', eventId)[0];
                event.title = eventType;
                event.start = startDate;
                event.end = endDate;
                event.color = eventColor;
                calendar.fullCalendar('updateEvent', event);
            } else {
                // Neues Ereignis einfügen
                var newEvent = {
                    title: eventType,
                    start: startDate,
                    end: endDate,
                    color: eventColor
                };
                events.push(newEvent); // Füge das neue Ereignis zum events-Array hinzu
                calendar.fullCalendar('renderEvent', newEvent, true); // True, um das Event an den Kalender zu binden
            }
        }

        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        
        // Event-ID und Formular zurücksetzen
        $('#eventForm').data('eventId', null);
        $('#eventForm')[0].reset();
        $('#deleteEventButton').hide();
    });

    // Ereignis löschen
    $('#deleteEventButton').on('click', function() {
        var eventId = $('#eventForm').data('eventId');
        if (eventId) {
            var event = $('#calendar').fullCalendar('clientEvents', eventId)[0];
            events = events.filter(e => e !== event); // Entferne das Ereignis aus dem events-Array
            $('#calendar').fullCalendar('removeEvents', eventId);
            
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            
            // Event-ID und Formular zurücksetzen
            $('#eventForm').data('eventId', null);
            $('#eventForm')[0].reset();
            $('#deleteEventButton').hide();
        }
    });

    // Verstecke den Löschen-Button standardmäßig
    $('#deleteEventButton').hide();

    document.getElementById("backButton").addEventListener('click', navigateHome);
    function navigateHome() {
        window.location.href = "time-entry_Site.html";
    }

});

