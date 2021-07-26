var currentDay = $('#currentDay');
var time9 = $('#time-9');
var time10 = $('#time-10');
var time11 = $('#time-11');
var time12 = $('#time-12');
var time1 = $('#time-1');
var time2 = $('#time-2');
var time3 = $('#time-3');
var time4 = $('#time-4');

var form9 = $('#form-9');
var form10 = $('#form-10');
var form11 = $('#form-11');
var form12 = $('#form-12');
var form1 = $('#form-1');
var form2 = $('#form-2');
var form3 = $('#form-3');
var form4 = $('#form-4');

var time9 = '9 am';
var time10 = '10 am'
var time11 = '11 am'
var time12 = '12 am'
var time1 = '1 pm'
var time2 = '2 pm'
var time3 = '3 pm'
var time4 = '4 pm';

//Updates current date and time using moment and updates the text area
var currentTime = moment().format('dddd MMM, do - h:mm a');
currentDay.text(currentTime);

//Update time slots to be able to tell if the time has passed current slot

//Save inputs to local storage while keeping forms filled

//Pull from local storage to fill on page refresh
