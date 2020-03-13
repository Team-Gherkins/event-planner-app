function addressDisplay() {
  var state =
    document.getElementById('address-state')[document.getElementById('address-state').selectedIndex].value;
  var addressString = document.getElementById("address-street").value + ", "
    + document.getElementById("address-apt").value + ", "
    + document.getElementById("address-city").value + ", "
    + state + ", "
    + document.getElementById("address-zip").value;
  document.getElementById("event-address").value = addressString;
  $('.ui.accordion').accordion('close', 0);
}



function checkInput() {

  var sdate = null;
  var edate = null;
/*
  $('#event-start').calendar({
    onChange: function (date, text) {
      sdate = text;
    },
  });

  $('#event-end').calendar({
    onChange: function (date, text) {
      edate = text;
    },
  });*/

  var valid = true;
  var title = document.getElementById("event-title").value;
  var venue = document.getElementById("event-venue").value;
  var address = document.getElementById("event-address").value;
  var description = document.getElementById("event-description").value;

  // code to make start date into a string for .ics file
  var startDate = new Date(sdate).toISOString();
  var finalSDate = startDate.substr(0,4) + startDate.substr(5,2) + startDate.substr(8,2) + 'T'  + startDate.substr(11,2)
    + startDate.substr(14,2) + startDate.substr(17,2);
  var compareStart = new Date(sdate).getTime();

  // code to make start date into a string for .ics file
  var endDate = new Date(edate).toISOString();
  var finalEDate = endDate.substr(0,4) + endDate.substr(5,2) + endDate.substr(8,2) + 'T'  + endDate.substr(11,2)
    + endDate.substr(14,2) + endDate.substr(17,2);
  var compareEnd = new Date(edate).getTime();


  console.log('info for start date:')
  console.log(sdate);
  console.log(startDate);
  console.log(finalSDate);

  console.log('info for end date:')
  console.log(edate);
  console.log(endDate);
  console.log(finalEDate);

  //check parameters.
  if(sdate === null | edate === null) {
    valid = false;
  } else if(compareStart > compareEnd){
    valid = false;
  } else if(title === ''){
    valid = false;
  } else if(venue === ''){
    valid = false;
  } else if(address === ''){
    valid = false;
  } else if(description === ''){
    valid = false;
  } else if (valid === true) {
  }
  return valid;
}

exports.checkInput = checkInput();
