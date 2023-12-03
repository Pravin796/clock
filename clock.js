function time() {
    let dates = new Date();
    let h = dates.getHours();
    let m = dates.getMinutes();
    let s = dates.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(time,1000);  
}
function checkTime(i){
    if(i < 10){i = "0" + i};
    return i;
}

setInterval(() => {
   let Aclock = new Date();
    let hour = Aclock.getHours();
    let minutes = Aclock.getMinutes();
    let seconds = Aclock.getSeconds(); 
    hrotation = 30*hour + minutes/2;
    mrotation = 6*minutes;
    srotation = 6*seconds;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);