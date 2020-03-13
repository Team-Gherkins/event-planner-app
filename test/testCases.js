const assert = require('chai').assert;
const jsdom = require("jsdom");
const fs = require('fs');

const htmlContent = fs.readFileSync("html/user-interface.html").toString();

const { JSDOM } = jsdom;
const { window } = new JSDOM(htmlContent);
global.document = window.document;
global.window = window;

const validator = require('../javascript/formValidation');


describe('Validator', function() {
  it ('Success', function() {
    document.getElementById("event-title").value = "test"
/*    $('#event-start').calendar('set startDate', new Date(2020, 3, 21, 1, 10, 53, 23));
    $('#event-start').calendar('set endDate', new Date(2020, 3, 19, 1, 10, 53, 23));*/
    document.getElementById("event-venue").value = "test"
    document.getElementById("event-address").value = "test"
    document.getElementById("event-description").value = "test"
    assert.isNotTrue(checkInput(), "Success");
  });
});

