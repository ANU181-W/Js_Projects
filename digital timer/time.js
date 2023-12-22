let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let seconds = document.getElementById("seconds");
let am_pm=document.getElementById("am_pm")
let clock = setInterval(function time() {
  let dateNow = new Date();
  let hr = dateNow.getHours();
  let min = dateNow.getMinutes();
  let sec = dateNow.getSeconds();
  if(hr>=12){
    if(hr>12){
      hr-=12;
      am_pm.innerHTML="<p>PM</p>"
      
    }
    else if(hr==0){
       hr=12;
       am_pm.innerHTML="<p>AM</p>"
    }
  }
  hr = hr.toString().padStart(2, "0");
  min = min.toString().padStart(2, "0");
  sec = sec.toString().padStart(2, "0");

  let timeString = `${hr}:${min}:${sec}`;
  hour.innerHTML = hr;
  minute.innerHTML = min;
  seconds.innerHTML = sec;
}, 1000);