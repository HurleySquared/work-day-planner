// Utilized JQuery to get the Day, Month, and day of month to display
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));
console.log(currentDay);

var actualTime = moment().hour();
console.log(actualTime);

function colorTime () {
    for (var i = 9; i < 18; i++) {
        if (i < actualTime) {
            $("#" + i).addClass("past");
        } else if (i === actualTime) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}
colorTime();

var textArea = $("#9");

// function renderWork () {
//     var textArea = localStorage.getItem("textArea", textArea);
// }; 
// renderWork();

$(".saveBtn").on("click", function () {
    var textArea = $("#9").val();
    localStorage.setItem("textArea", textArea);
})