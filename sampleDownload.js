function downloadFile(filename) {
  var eventVisibility = document.getElementById('event-visibility')[document.getElementById('event-visibility').selectedIndex].value;
  var eventPriority = document.getElementById('event-priority')[document.getElementById('event-priority').selectedIndex].value;
  var eventTimezone = document.getElementById('timezone-dropdown')[document.getElementById('timezone-dropdown').selectedIndex].value;

  var eventStart = ($('#event-start').calendar('get date') + '').split("-", 1);
  var eventEnd = ($('#event-end').calendar('get date') + '').split("-", 1);


  var fileContents = "";
  fileContents += document.getElementById('event-title').value + "\n"
                + eventVisibility + "\n"
                + eventPriority + "\n"
    // calendar -- https://fomantic-ui.com/modules/calendar.html#/definition
                + eventStart[1] + "\n"
                + eventEnd[1] + "\n"
                + eventTimezone + "\n"
                + document.getElementById('event-venue').value + "\n"
                + document.getElementById('event-address').value + "\n"
                + document.getElementById('event-description').value;

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
