const http = require("http");

const server = http.createServer((request, response) => {

    let currentyear = new Date().getFullYear();
    let currentday = new Date().getDay();
    let currentdate = new Date().getDate();
    let currentmonth = new Date().getMonth();

    response.statuscode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Today's date is " + dayOfWeek(currentday) + ", " + currentdate + " " + monthOfYear(currentmonth + 1) + ", " + currentyear + ".");
});
//127.0.0.1:
server.listen(5000, "127.0.0.1", () => {
    console.log("Server running...");
});

//npm i nodemon - This installs nodemon 

// Assignment: print to the user "Today's date is Wednesday, 26th July 2023."

function dayOfWeek(currentDay){
    if(currentDay == 1){
        return "Monday";
    }else if(currentDay == 2){
        return "Tuesday";
    }else if(currentDay == 3){
        return "Wednesday";
    }else if(currentDay == 4){
        return "Thursday";
    }else if(currentDay == 5){
        return "Friday";
    }else if(currentDay == 6){
        return "Saturday";
    }else {
        return "Sunday";
    }  
}

function monthOfYear(currentMonth){
    if(currentMonth == 1){
        return "Jan";
    }else if(currentMonth == 2){
        return "Feb";
    }else if(currentMonth == 3){
        return "March";
    }else if(currentMonth == 4){
        return "April";
    }else if(currentMonth == 5){
        return "May";
    }else if(currentMonth == 6){
        return "June";
    }else if(currentMonth == 7){
        return "July";
    }else if(currentMonth == 8){
        return "Aug";
    }else if(currentMonth == 9){
        return "Sept";
    }else if(currentMonth == 10){
        return "Oct";
    }else if(currentMonth == 11){
        return "Nov";
    }else {
        return "Dec";
    }
}
