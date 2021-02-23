// Utilized JQuery to get the Day, Month, and day of month to display
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));
// Set hour of the day
var actualHour = moment().hour();

function colorTime () {
    for (var i = 9; i < 18; i++) {
        if (i < actualHour) {
            $("#" + i).addClass("past");
        } else if (i === actualHour) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
        $("#" + i).val(localStorage.getItem("hour" + i));
    }
}
colorTime();
// Save user Input from text area to local storage
$(".saveBtn").on("click", function () {
    var clickedHour = $(this).attr("id").split("btn")[1]
    var userInput = $("#" + clickedHour).val().trim()
    if (userInput) {
        localStorage.setItem("hour" + clickedHour, userInput)
    }
});