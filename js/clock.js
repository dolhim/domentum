const clock = document.querySelector('h2#clock');

setInterval(
    paintClock
, 1000);

function paintClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hourText = formatting(hours);
    const minuteText = formatting(minutes);
    const secondText = formatting(seconds);
    clock.innerText = `${hourText}:${minuteText}:${secondText}`;
}

function formatting(value) {
    return String(value).padStart(2, '0');
}