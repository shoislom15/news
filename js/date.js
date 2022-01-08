const d = new Date();
let weekday = d.getDay();
let month = d.getMonth() + 1;
let day = d.getDate();


switch (d.getDay()) {
    case 1:
        weekday = "Monday"
        break;
    case 2:
        weekday = "Tuesday"
        break;
    case 3:
        weekday = "Wednesday"
        break;
    case 4:
        weekday = "Thursday"
        break;
    case 5:
        weekday = "Friday"
        break;
    case 6:
        weekday = "Saturday"
        break;
    case 7:
        weekday = "SUnday"
        break;

    default:
        weekday = weekday + "th day of week"
        break;
}

switch (month) {
    case 1: month = "January";
        break;
    case 2: month = "February";
        break;
    case 3: month = "March";
        break;
    case 4: month = "April";
        break;
    case 5: month = "May";
        break;
    case 6: month = "June";
        break;
    case 7: month = "July";
        break;
    case 8: month = "August";
        break;
    case 9: month = "September";
        break;
    case 10: month = "October";
        break;
    case 11: month = "November";
        break;
    case 12: month = "December";
        break;
}

const currentDay = document.getElementById('day');
currentDay.innerHTML = `${weekday}, ${month} ${day}, ${d.getFullYear()}`;


console.log(weekday);
