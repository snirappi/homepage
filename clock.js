function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
	var d="AM";
	d = merridian(d, h);
    h = adjustHour(h);
    m = checkTime(m);
    document.getElementById("clock").innerHTML = h+":"+m+" "+d;
    var t = setTimeout(function(){startTime()},5000);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function adjustHour(i) {
    if (i>12) {i = i - 12;}
    else if(i == 0) {i = 12;}
    return i;
}

function merridian(i, h) {
	if (h>12) {i = "PM"};
	return i;
}
