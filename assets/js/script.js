var currentDay = $('#currentDay');

var form9 = $('#form-9');
var form10 = $('#form-10');
var form11 = $('#form-11');
var form12 = $('#form-12');
var form1 = $('#form-1');
var form2 = $('#form-2');
var form3 = $('#form-3');
var form4 = $('#form-4');

var time9 = moment().startOf('day').add(9, 'hours');
var time10 = moment().startOf('day').add(10, 'hours');
var time11 = moment().startOf('day').add(11, 'hours');
var time12 = moment().startOf('day').add(12, 'hours');
var time1 = moment().startOf('day').add(13, 'hours');
var time2 = moment().startOf('day').add(14, 'hours');
var time3 = moment().startOf('day').add(15, 'hours');
var time4 = moment().startOf('day').add(16, 'hours');

console.log(time3);

//Updates current date and time using moment and updates the text area
var currentTime = moment().format('dddd MMM, do - h:mm a');
currentDay.text(currentTime);

//Update time slots to be able to tell if the time has passed current slot
function setSchedule(){
    var currentHour = moment().startOf('hour');
    console.log('Called');
    //9am Slot
    if (currentHour.isAfter(time9)){
        form9.addClass('past');
    } else if (currentHour.isSame(time9)) {
        form9.addClass('present');
    } else if (currentHour.isBefore(time9)){
        form9.addClass('future')
    };

    //10am Slot
    if (currentHour.isAfter(time10)){
        form10.addClass('past');
    } else if (currentHour.isSame(time10)) {
        form10.addClass('present');
    } else if (currentHour.isBefore(time10)){
        form10.addClass('future')
    };

    //11am Slot
    if (currentHour.isAfter(time11)){
        form11.addClass('past');
    } else if (currentHour.isSame(time11)) {
        form11.addClass('present');
    } else if (currentHour.isBefore(time11)){
        form11.addClass('future')
    };

    //12pm Slot
    if (currentHour.isAfter(time12)){
        form12.addClass('past');
        console.log('Hi');
    } else if (currentHour.isSame(time12)) {
        form12.addClass('present');
        console.log('hey');
    } else if (currentHour.isBefore(time12)){
        form12.addClass('future')
        console.log('hello');
    };

    //1pm Slot
    if (currentHour.isAfter(time1)){
        form1.addClass('past');
    } else if (currentHour.isSame(time1)) {
        form1.addClass('present');
    } else if (currentHour.isBefore(time1)){
        form1.addClass('future')
    };

    //2pm Slot
    if (currentHour.isAfter(time2)){
        form2.addClass('past');
    } else if (currentHour.isSame(time2)) {
        form2.addClass('present');
    } else if (currentHour.isBefore(time2)){
        form2.addClass('future')
    };

    //3pm Slot
    if (currentHour.isAfter(time3)){
        form3.addClass('past');
    } else if (currentHour.isSame(time3)) {
        form3.addClass('present');
    } else if (currentHour.isBefore(time3)){
        form3.addClass('future')
    };

    //4pm Slot
    if (currentHour.isAfter(time4)){
        form4.addClass('past');
    } else if (currentHour.isSame(time4)) {
        form4.addClass('present');
    } else if (currentHour.isBefore(time4)){
        form4.addClass('future')
    };
};
setSchedule();
//Save inputs to local storage while keeping forms filled

//Pull from local storage to fill on page refresh
