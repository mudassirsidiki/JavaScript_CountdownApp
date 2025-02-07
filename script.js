
const endDate = "25 September 2024 10:00 PM";
const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


document.getElementById("end-date").innerHTML = endDate;

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
//yahan p difference miliseconds mein nikl k aya  tha tw usko seconds mein convert krne k lye 1000 se divide krdya  


// now converting seconds into DAYS, HOURS, MINUTES AND SECONDS
    days.value = Math.floor(diff / 86400);
    hours.value = Math.floor(diff / 3600 % 24);
    minutes.value = Math.floor(diff / 60  % 60);
    seconds.value = Math.floor(diff % 60);
}


// Call clock() every second to update the countdown
setInterval(clock, 1000);



