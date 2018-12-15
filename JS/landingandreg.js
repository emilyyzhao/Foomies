//Javascript for Memory
//Javascript Functions
//Default house name
localStorage.setItem("house", "Best House");
//function to see if user exists/matches
function compare(){
  localStorage.setItem("dummyUser", "ilovefood");
  localStorage.setItem("dummyPass", "myfavoriteisc0rn");
  localStorage.setItem("currentUser", document.getElementById("currentUser").value)
  localStorage.setItem("currentPass", document.getElementById("currentPass").value)
  if (localStorage.getItem("currentUser") != localStorage.getItem("dummyUser"))
    {
    $('#usernameNotFound').fadeIn();
  }
  else if(localStorage.getItem("currentPass") != localStorage.getItem("dummyPass"))
    {
    $('#usernameNotFound').hide();
    $('#wrongPassword').fadeIn();
  }
  else{
    window.location.href = "index.html";
  }
}

//Registers New User Info
function register(){
  var fieldValue = document.getElementById("fName").value;
  localStorage.setItem("fName", fieldValue);
  var fieldValue = document.getElementById("lName").value;
  localStorage.setItem("lName", fieldValue);
  var fieldValue = document.getElementById('mail').value;
  localStorage.setItem("mail", fieldValue);
  var fieldValue = document.getElementById('currentUser').value;
  localStorage.setItem("currentUser", fieldValue);
  var fieldValue = document.getElementById('pass').value;
  localStorage.setItem("pass", fieldValue);
}

//Registers New House Info
function registerhouse(){
var fieldValue = document.getElementById("house").value;
localStorage.setItem("house", fieldValue);
var fieldValue = document.getElementById("address").value;
localStorage.setItem("address", fieldValue);
var fieldValue = document.getElementById('city').value;
localStorage.setItem("city", fieldValue);
var fieldValue = document.getElementById('zip').value;
localStorage.setItem("zip", fieldValue);
var fieldValue = document.getElementById('country').value;
localStorage.setItem("country", fieldValue);
}

function reviewData(){
  var firstname = localStorage.getItem("fName");
  var lastname= localStorage.getItem("lName");
  var email = localStorage.getItem("mail");
  var user = localStorage.getItem("currentUser");
  var password = localStorage.getItem("pass");
  document.getElementById("userdata").innerHTML = "First Name: " + firstname + "<br>" +
  "Last Name: " + lastname + "<br>"+ "Email: " + email + "<br>" + "Username: " + user +
  "<br>"+"Password: " + password+"<br>";
  var house = localStorage.getItem("house");
  var address = localStorage.getItem("address");
  var city = localStorage.getItem("city");
  var zip = localStorage.getItem("zip");
  var country = localStorage.getItem("country");
  document.getElementById("housedata").innerHTML = "House Nickname " + house + "<br>" +
  "Address: " + address + "<br>"+ "City: " + city + "<br>" + "Zip Code: " + zip +
  "<br>"+"Country: " + country+"<br>";
}
