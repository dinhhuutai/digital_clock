
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

var hourElement = document.querySelector('.hour');
var minElement = document.querySelector('.min');
var secElement = document.querySelector('.sec');

function clockClassic(){
    let time = new Date();
    let hour = time.getHours() * 30;
    let min = time.getMinutes() * 6;
    let sec = time.getSeconds() * 6;

    hourElement.style.transform = `rotate(${hour + (min / 12)}deg)`;
    minElement.style.transform = `rotate(${min}deg)`;
    secElement.style.transform = `rotate(${sec}deg)`;
}

function clockElectronic() {
    let time = new Date();
    let hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let checkSec = time.getHours() >= 12 ? 'PM' : 'AM';

    var currTime = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} ${checkSec}`;
    var currDay = `${weekday[time.getDay()].toUpperCase()}, ${months[time.getMonth()].toUpperCase()} ${time.getDate()}`;

    document.querySelector('.time h2').innerText = currTime;
    document.querySelector('.day p').innerText = currDay;
}

setInterval(() => {
    clockClassic();
    clockElectronic()
}, 1000);


// Mode color
function colorMode() {
    var html = document.querySelector('html');
    var lightMode = document.querySelector('.light-mode');
    var darkMode = document.querySelector('.dark-mode');

    lightMode.onclick = () => {
        lightMode.classList.remove('show-mode');
        darkMode.classList.add('show-mode');

        html.classList.add('light-mode-color');
    }

    darkMode.onclick = () => {
        darkMode.classList.remove('show-mode');
        lightMode.classList.add('show-mode');

        html.classList.remove('light-mode-color');
    }
}

colorMode();

