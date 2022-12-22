const hour = document.getElementById("hrs")
const minute = document.getElementById("mins")
const seconds = document.getElementById("secs")
const day = document.getElementById("day")
const todayDate = document.getElementById("date")
const notation = document.getElementById("notation")
const currentTime = new Date()

function time() {
    originalHour = new Date().getHours()
    currentHour = (new Date().getHours()) % 12 || 12
    currentMinute = new Date().getMinutes()
    currentSeconds = new Date().getSeconds()
    renderTime()
}
setInterval(time, 1000)

function date() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    weekday = days[currentTime.getDay()]
    dd = currentTime.getDate()
    mm = currentTime.getMonth() + 1
    yy = currentTime.getFullYear()
    console.log(new Date())
    renderDate()
}
date()

function renderTime() {
    hour.textContent = currentHour < 10 ? '0' + currentHour : currentHour
    minute.textContent = currentMinute < 10 ? '0' + currentMinute : currentMinute
    seconds.textContent = currentSeconds < 10 ? '0' + currentSeconds : currentSeconds

    if (originalHour < 12) {
        notation.textContent = "AM"
    } else {
        notation.textContent = "PM"
    }
}

function renderDate() {
    day.textContent = weekday
    todayDate.textContent = dd + " / " + mm + " / " + yy
}