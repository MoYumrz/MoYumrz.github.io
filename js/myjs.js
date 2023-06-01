function changemode() {
    var element = document.body;
    element.classList.toggle('darkMode');
}

function time() {
    var time = new Date();
    var year, month, day;
    var hour, minute, seconds;
    year = time.getFullYear();
    month = time.getMonth();
    day = time.getDate();
    document.getElementById('timeYear').innerHTML = year;
    document.getElementById('timeMonth').innerHTML = month + 1;
    document.getElementById('timeDay').innerHTML = day;
    var temph = time.getHours();
    if (temph <= 12 && temph > 0) {
        hour = '0' + temph;
    }
    else {
        hour = temph
    }
    var tempm = time.getMinutes();
    if (tempm < 10 && tempm >= 0) {
        minute = '0' + tempm;
    }
    else {
        minute = tempm
    }
    var temps = time.getSeconds();
    if (temps < 10 && temps >= 0) {
        seconds = '0' + temps;
    }
    else {
        seconds = temps;
    }
    document.getElementById('timeHour').innerHTML = hour;
    document.getElementById('timeMinute').innerHTML = minute;
    document.getElementById('timeSeconds').innerHTML = seconds;
}
window.setInterval('time()', 1000);