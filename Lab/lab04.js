// declaring an array with name myCommutes
let myCommutes = ["housing", "hague", "geneva", "rental gandi", "c9", "c10"];
// declssaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "room",
    floor: 1,
    print: "ifloor",
    mine: true,
    drivers: ["Elena", "Alex", "the guy with a red beard"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
