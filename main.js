var victims = prompt("How many victims would you like to enter?");

var victimArray = [];
var phoneArray = [];
var streetArray = [];


for (var i = 1; i <= parseInt(victims); i++) {
    var name = prompt("Victim's Name: ");
    var phoneNumber = prompt("Victim's Phone Number: ");
    var street = prompt("Street: ");
    victimArray.push(name);
    phoneArray.push(phoneNumber);
    streetArray.push(street);
}

var volunteers = prompt("How many volunteers would you like to enter?");

var volunteerArray = [];
var volPhoneArray = [];
var volStreetArray = [];

for (var i = 1; i <= parseInt(volunteers); i++) {
    var name = prompt("Volunteer's Name: ");
    var phoneNumber = prompt("Volunteer's Phone Number: ");
    var street = prompt("Street: ");
    volunteerArray.push(name);
    volPhoneArray.push(phoneNumber);
    volStreetArray.push(street);
}

function showArray() {
    console.log(victimArray);
    console.log(phoneArray);
    console.log(streetArray);
    console.log(volunteerArray);
    console.log(volPhoneArray);
    console.log(volStreetArray);
}

showArray();

alert("We have " + victimArray.length + " victims.");