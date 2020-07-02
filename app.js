let dt = new Date();
let t = dt.getHours();
let m = dt.getMinutes();


//DISPLAY CURRENT DATE
let output = document.getElementById("dateToday");
output.innerHTML = "Today is:     " + dt.toLocaleString();

let time = document.getElementById("timeGetter");
let login1 = document.getElementById("in");
let login2 = document.getElementById("otl");
let login3 = document.getElementById("bfl");
let login4 = document.getElementById("out");
let finish = document.getElementById("completed");


time.addEventListener('click', getTime);

function getTime(e){
  const timeStamp = t + ":" + m;

  let timeStamps;

  if(localStorage.getItem('time stamps') === null) {
    timeStamps = [];
  } else {
    timeStamps = JSON.parse(localStorage.getItem('time stamps'));
  }

  alert('Time recorded');

  timeStamps.push(timeStamp);
 
  localStorage.setItem('time stamps', JSON.stringify(timeStamps))

  console.log(timeStamps[0]);

  login1.innerHTML = timeStamps[0];
  login2.innerHTML = timeStamps[1];
  login3.innerHTML = timeStamps[2];
  login4.innerHTML = timeStamps[3];

};

// document.addEventListener('DOMContentLoaded', getTimes) {
//   if(localStorage.getItem('time stamps') === null) {
//     timeStamps = [];
//   } else {
//     timeStamps = JSON.parse(localStorage.getItem('time stamps'));
//   }
// }

// const times = JSON.parse(localStorage.getItem('time stamps'));
 
 
// function getTimes() {
//   times.forEach(function(time){
//     login1.innerHTML = times[0];
//     login2.innerHTML = times[1];
//     login3.innerHTML = times[2];
//     login4.innerHTML = times[3];
//   });
// }




