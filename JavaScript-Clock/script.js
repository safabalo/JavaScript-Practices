

function clock(){
    let day = new Date();
    let h= day.getHours();
    let m= day.getMinutes();
    let s= day.getSeconds();
    let d="AM";
    if(h == 0) h=12;
    if(h > 12){h=h-12; d="PM"}
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    let time = h + ":" + m + ":" + s + " " + d;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(clock, 1000);
}
clock();