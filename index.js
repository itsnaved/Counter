const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const timerFunction =()=>{
    setInterval(()=>{
        const timer = new Date("04/03/2025").getTime();
    const today = new Date().getTime();

    const difference = timer - today;
    const leftDay = Math.floor(difference / day);
    const leftHour = Math.floor((difference % day)/ hour);
    const leftMinute = Math.floor((difference % hour)/ minute);
    const leftSecond = Math.floor((difference % minute)/ second);
    console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);

    },1000);
};

timerFunction();