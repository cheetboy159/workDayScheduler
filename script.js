

$(document).ready(function () {
    // store date and time in variables
    var todaysDate = moment().format('dddd MMM Do YYYY');
    var timeNow = moment().format('hh:mm a');
    var timeCompare = moment().format("H");
    var times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    // getting day and time and storing in variables
    var dayEl = $("#currentDay");
    var timeEl = $("#currentTime");
    var timeLiEl = $("li");
    var input = $(".input");
    var timeEntered, textEntered;
    // jumbotron date and time.
    dayEl.text(todaysDate);
    timeEl.text(timeNow);
    colorCode();
    // set color for time of day
    function colorCode() {
        for (var i = 0; i < timeLiEl.length; i++) {
            // time to come is green.
            if (timeCompare == times[i]) {
                input[i].style.backgroundColor = "#ff7675";
            }
            // now is red.
            else if (timeCompare < times[i]) {
                input[i].style.backgroundColor = "#55efc4";
            }
        };
    }
    // check local storage for data.
    for (var i = 9; i <= 17; i++) {
        $("." + i).val(localStorage["" + i]);
        console.log(localStorage["" + i]);
    }
    // Define what happens when our user clicks the "saveBtn"
    $("ul").on("click", ".saveBtn", function (event) {
        // keeps our text when refresh.
        event.preventDefault();
        // keeps inputBox value.
        var inputBox = ($(this).prev().val());
        // Get the timeslot value.
        var timeSlot = parseInt(($(this).parent().attr("value")));
        // store our inputBox and timeSlot vars in global variables.
        textEntered = inputBox;
        timeEntered = timeSlot;
        // Log to the console which timeslot was just saved.
        // console.log("User saved to " + timeEntered + " time slot");
        // Update localStorage.
        localStorage.setItem(timeEntered, textEntered);
        var previousPost = localStorage.getItem(textEntered);
    });
});
