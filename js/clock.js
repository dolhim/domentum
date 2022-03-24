const clock = document.querySelector('span#clock'); 

setInterval(
    paintClock
, 1000);

function paintClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const hourText = formatting(hours);
    const minuteText = formatting(minutes);
    clock.innerText = `${hourText}:${minuteText}`;
}

function formatting(value) {
    return String(value).padStart(2, '0');
}
