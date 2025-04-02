const daysElement = document.querySelector(".days"),
hoursElement = document.querySelector(".hours"),
minutesElement = document.querySelector(".minutes"),
secondsElement = document.querySelector(".seconds"),
heading = document.querySelector("h1"),
counterTimer = document.querySelector(".counterTimer");

const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const timerFunction =()=>{

    let now = new Date(),
    dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth()+1).padStart(2, "0"),
    yyyy = now.getFullYear();

    // const enteredDay = prompt("Enter Day").padStart(2, "0");
    // const enteredMonth = prompt("Enter Month").padStart(2, "0");

    let enteredDay, enteredMonth;
    do {
        enteredDay = prompt("Enter Day (1-31):");
        } while ( isNaN(enteredDay) || enteredDay < 1 || enteredDay > 31 );
        enteredDay = enteredDay.padStart(2, "0");

    do {
        enteredMonth = prompt("Enter Month (1-12):");
        } while ( isNaN(enteredMonth) || enteredMonth < 1 || enteredMonth > 12 );
        enteredMonth = enteredMonth.padStart(2, "0");

    now = `${mm}/${dd}/${yyyy}`;
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    if(now > targetDate)  targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;

const intervalId = setInterval(()=>{

    const timer = new Date(targetDate).getTime(),
    difference = timer - new Date().getTime(),
    leftDay = Math.floor(difference / day),
    leftHour = Math.floor((difference % day)/ hour),
    leftMinute = Math.floor((difference % hour)/ minute),
    leftSecond = Math.floor((difference % minute)/ second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if(difference < 0){
        counterTimer.style.display = "none";
        heading.innerText = "Times Up";
        clearInterval(intervalId);
    }},1000);
};
timerFunction();