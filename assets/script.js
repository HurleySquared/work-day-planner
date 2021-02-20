// Utilized JQuery to get the Day, Month, and day of month to display
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));