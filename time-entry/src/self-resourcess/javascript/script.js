// script.js

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

$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
        },
        defaultView: 'month',
        editable: true,
        events: [],
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

    document.getElementById('logoutButton').addEventListener('click', function() {
        alert("Sie haben sich erfolgreich abgemeldet!");
        window.location.href = 'login.html';
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
                calendar.fullCalendar('renderEvent', {
                    title: eventType,
                    start: startDate,
                    end: endDate,
                    color: eventColor
                }, true); // True, um das Event an den Kalender zu binden
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



});