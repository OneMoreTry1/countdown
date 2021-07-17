const secondsEl = document.getElementById('seconds');
const minsEl = document.getElementById('mins');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');
const monthsEl = document.getElementById('months');

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const differenceDate = new Date(newYearsDate - currentDate);

    const seconds = differenceDate.getSeconds();
    const mins = differenceDate.getMinutes();
    const hours = differenceDate.getHours();
    const days = differenceDate.getDay();
    const months = differenceDate.getMonth();

    secondsEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(mins);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = days;
    monthsEl.innerHTML = months;
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);