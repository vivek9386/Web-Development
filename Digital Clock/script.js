function getTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var format = "AM"
    setTimeout(getTime,1000);

    h = (h == 0)?(h = 12): h ;

    h = (h < 10)? "0" + h : h;

    m = (m < 10)? "0" + m : m;
    
    s = (s < 10)? "0" + s : s;

    document.getElementById("MyClockDisplay").innerHTML = h + ":" + m +":" + s + " " + format;

}

getTime();