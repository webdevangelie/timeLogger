//Variables
let dt = new Date();
let login = document.getElementById("in");
let otl = document.getElementById("otl");
let bfl = document.getElementById("bfl");
let logout = document.getElementById("out");
let finish = document.getElementById("completed");
let name = document.querySelector(".employee_name");
let color = document.querySelector(".content");

//DISPLAY CURRENT DATE
let output = document.getElementById("dateToday");
output.innerHTML = "Today is: " + dt.toLocaleString();

//Login
login.addEventListener('click', function showTime(){
  let loginTime = `${dt.getHours()}:${dt.getMinutes()}`;
  //console.log(loginTime);
  login.innerHTML = loginTime;
  login.setAttribute('disabled', true);
  otl.removeAttribute('disabled');

  //change background-color
  color.style.backgroundColor = 'brown';

  // Save in LS
  localStorage.setItem('login', loginTime);
});

//OTL
otl.addEventListener('click', function showTime(){
  let otlTime = `${dt.getHours()}:${dt.getMinutes()}`;
  //console.log(loginTime);
  otl.innerHTML = otlTime;
  otl.setAttribute('disabled', true);
  bfl.removeAttribute('disabled');

  //change background-color
  color.style.backgroundColor = 'salmon';

  // Save in LS
  localStorage.setItem('otl', otlTime);
});

//BFL
bfl.addEventListener('click', function showTime(){
  let bflTime = `${dt.getHours()}:${dt.getMinutes()}`;
  //console.log(loginTime);
  bfl.innerHTML = bflTime;
  bfl.setAttribute('disabled', true);
  logout.removeAttribute('disabled');

  //change background-color
  color.style.backgroundColor = 'orange';

  // Save in LS
  localStorage.setItem('bfl', bflTime);
});

//Logout
//BFL
logout.addEventListener('click', function showTime(){
  let logoutTime = `${dt.getHours()}:${dt.getMinutes()}`;
  //console.log(loginTime);
  logout.innerHTML = logoutTime;
  logout.setAttribute('disabled', true);

  // Save in LS
  localStorage.setItem('logout', logoutTime);

  //change background-color
  color.style.backgroundColor = 'green';

    // Good day message
    finish.innerText = 'Have a good day!';
});

//Clear local storage


