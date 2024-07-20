var fname = prompt(" Enter your first name ");
var lname = prompt(" Enter your last name ");
alert("Hello " + fname + lname);

var phone = prompt("Enter your favourite phone");
var fulllength = "My favourite phone is : " + phone;
var length = fulllength.length;
document.write(fulllength + "<br>");
document.write("length of string :" + length +"<br>");

var nationality = "Pakistani";
document.write("String : " + nationality + "<br>");
document.write("Index of 'n' : " + nationality.indexOf("n") +"<br>");

var hello = "Hello world";
document.write("String : " + hello + "<br>");
document.write("Last index of 'l' : " + hello.lastIndexOf("l"));

var hello = "Pakistani";
document.write("String : " + hello + "<br>");
document.write("Character at index 3 : " + hello.charAt(3) +"<br>");

var city = "Hyderabad";
document.write("city : " + city + "<br>");
document.write("After replacement : " + city.replace("Hyderabad", "Islamabad"));

var para =
  "Ali and saim are best friends.They play cricket and football together.";
document.write(para + "<br>");
document.write(para.replace(/and/g, "&"));

var string = "472";
document.write(string + "<br>");
document.write(typeof string + "<br>");
var num = Number(string);
document.write(num + "<br>");
document.write(typeof num + "<br>");

var userinput = prompt("Enter your favourite cricket player");
document.write(userinput.toUpperCase());

var userinput = prompt("Enter your favourite book");
var some = userinput.slice(0, 1).toUpperCase();
var some2 = userinput.slice(1).toLowerCase();
var some3 = some + some2;
document.write(some3);

var number = 35.36;
document.write(typeof number + number + "<br>");
var newnumber = String(number);
var dot = newnumber.replace(".", "");
document.write(typeof dot + dot + "<br>");


var password = prompt("enter a password")
if (password.length<6){
    alert("password should not less than 6 digit")
} else {
    if(password.charCodeAt(0) >=48 && password.charCodeAt(0) <=57){
        alert("password should not start with a number")
    } else {
        var hasnum = false;
        var hasalpha = false;

        for (var i=0; i<password.length; i++)
            {
                if((password.charCodeAt(i) >=65 && password.charCodeAt(i)  <=90) || (password.charCodeAt(i) >=97 && password.charCodeAt(i)  <=122)){
                    var hasnum= true;
                } else if (password.charCodeAt(i) >=48 && password.charCodeAt(i)  <=57){
                   var hasalpha=true;
                }
            }

    }
    
    if (hasnum && hasalpha){
        alert("valid password");
        "break"
        
    } 
    else {
        alert("invalid password")
    }
}


var username= prompt("enter your name")

for (let i = 0; i <username.length; i++) {
 var num = false
  let charCode = username.charCodeAt(i);
  var num=false
  if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
      alert("Invalid username! Please do not use @, ., , or !");
      break; 
  }
}

  



var university = "University of Karachi";
var len = university.length
for (var i =0; i<len; i++){
  document.write(university[i] +"<br>")
}


 var str = ("The quick brown fox jumps over the lazy dog").toLowerCase()
var count = (str.match(/the/g) || []).length;
console.log(count)

var myarr = ["cake", "apple pie", "cookie", "chips", "patties"];
var userinfo = prompt("What do you want to order").toLocaleLowerCase();
var matchfound = false;
for (var i = 0; i < myarr.length; i++)
  if (myarr[i] === userinfo) {
    matchfound = true;
    alert(userinfo + " is available in our bakery");
    break;
  } else {
    matchfound = false;
    alert("Sorry we dont have " + userinfo + " in our bakery");
  }

var userinput = prompt("enter your country name?");
var lastChar = userinput[userinput.length - 1];
alert("The last character of your input is: " + lastChar);
