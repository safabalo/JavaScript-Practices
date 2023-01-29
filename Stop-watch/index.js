const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
const milliseconds = document.getElementById('millisecond');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let interval;

function timer() {
    ms++;
    milliseconds.innerHTML = ms;
    if(ms >= 100){
        ms=0
        s++
        seconds.innerHTML = s;
    }else if (s >= 60){
        s=0 
        m++ 
        minutes.innerHTML=m
    }else if(m >= 60){
        m=0
        h++
        hours.innerHTML=h
    }
}
start.addEventListener('click', function() {
    clearInterval(interval);
    interval = setInterval(timer, 10);
});
stop.addEventListener('click', function() {
    clearInterval(interval);
})
reset.addEventListener('click', function() {
    clearInterval(interval);
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '00';
})
