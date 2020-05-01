function generateFile(filename, uid, dtstamp, description, classification, priority, timezoneId, dtstart, dtend, rsvp, sentBy, location, resources, summary, lat, lng, rrFinal, exdate) {

  var rsvpText = "";
  var sentByText = "";
  var resourcesText = "";
  var summaryText = "";
  var rrFinalText = "";
  var exdateText = "";
  if (rsvp !== "") {
    rsvpText =
`ATTENDEE;RSVP=TRUE:mailto:${rsvp}
`;
  }
  if (sentBy !== "") {
    sentBy =
`ORGANIZER;SENT-BY=\"mailto:${sentBy}\":mailto:${sentBy}
`;
  }
  if (resources !== "") {
    resourcesText =
`RESOURCES:${resources}
`;
  }
  if (summary !== "") {
    summaryText =
`SUMMARY:${summary}
`
  }
  if (rrFinal !== "") {
    rrFinalText =
`${rrFinal}
`
  }
  if (exdate !== "") {
    exdateText =
`${exdate}
`
  }

  // original uid: c7614cff-3549-4a00-9152-d25cc1fe077d
  // original dtstamp: 20200228T141403

  var text =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ZContent.net//Zap Calendar 1.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:${timezoneId}
END:VTIMEZONE
BEGIN:VEVENT
CLASS:${classification}
PRIORITY:${priority}
DESCRIPTION:${description}
UID:${uid}
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:TRANSPARENT
DTSTART:${dtstart}
DTEND:${dtend}
DTSTAMP:${dtstamp}
CATEGORIES:SCHOOL, STUDY
`
  text += sentByText + rsvpText + resourcesText + summaryText + rrFinalText + exdateText;
  text +=
`LOCATION:${location}
GEO:${lat};${lng}
END:VEVENT
END:VCALENDAR`;

  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
