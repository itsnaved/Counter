const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");

const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const timerFunction =()=>{

    const now = new Date();
    let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth()+1).padStart(2, "0"),
    yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
    console.log();

    // setInterval(()=>{
    //     const timer = new Date(targetDate).getTime(),
    // today = new Date().getTime(),
    // difference = timer - today,
    // leftDay = Math.floor(difference / day),
    // leftHour = Math.floor((difference % day)/ hour),
    // leftMinute = Math.floor((difference % hour)/ minute),
    // leftSecond = Math.floor((difference % minute)/ second);

    setInterval(()=>{
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

    },1000);
};

timerFunction();