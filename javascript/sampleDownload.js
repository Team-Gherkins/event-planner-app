function downloadFile(filename) {
  var eventVisibility = document.getElementById('event-visibility')[document.getElementById('event-visibility').selectedIndex].value;
  var eventPriority = document.getElementById('event-priority')[document.getElementById('event-priority').selectedIndex].value;
  var eventTimezone = document.getElementById('timezone-dropdown')[document.getElementById('timezone-dropdown').selectedIndex].value;

  var eventStart = ($('#event-start').calendar('get date') + '').split("-", 1);
  var eventEnd = ($('#event-end').calendar('get date') + '').split("-", 1)

  var fileContents = "";
  fileContents += "BEGIN:VCALENDAR\n"
                + "VERSION:2.0\n"
                + "BEGIN:VEVENT\n"
                + "SUMMARY:" + document.getElementById('event-title').value + "\n"
                + "CLASS:" + eventVisibility + "\n"
                + "PRIORITY:" + eventPriority + "\n"
    // calendar -- https://fomantic-ui.com/modules/calendar.html#/definition
                + "DTSTART:" + eventStart[1] + "\n" // incorrect format
                + "DTEND:" + eventEnd[1] + "\n" // incorrect format
                + "BEGIN:VTIMEZONE\n"
                + "TZID:" + eventTimezone + "\n"
                + "END:VTIMEZONE\n"
                // + document.getElementById('event-venue').value + "\n"
                + "LOCATION:" + document.getElementById('event-address').value + "\n"
                + "DESCRIPTION:" + document.getElementById('event-description').value + "\n"
                + "END:VEVENT\n"
                + "END:VCALENDAR\n";

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
