function generateFile(filename){
  var text = 'BEGIN:VCALENDAR\n' +
      'VERSION:2.0\n' +
      'PRODID:-//ZContent.net//Zap Calendar 1.0//EN\n' +
      'CALSCALE:GREGORIAN\n' +
      'METHOD:PUBLISH\n' +
      'BEGIN:VEVENT\n' +
      'SUMMARY:Study for exam\n' +
      'UID:c7614cff-3549-4a00-9152-d25cc1fe077d\n' +
      'SEQUENCE:0\n' +
      'STATUS:CONFIRMED\n' +
      'TRANSP:TRANSPARENT\n' +
      'DTSTART:20200313T100000\n' +
      'DTEND:20200313T130000\n' +
      'DTSTAMP:20200228T141403\n' +
      'CATEGORIES:SCHOOL, STUDY\n' +
      'LOCATION:Hamilton Library\n' +
      'GEO:21.300846;-157.816225\n' +
      'DESCRIPTION: Please study for this exam\n' +
      'END:VEVENT\n' +
      'END:VCALENDAR\n';
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


