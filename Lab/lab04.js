// declaring an array with name myCommutes
let myCommutes = ["housing", "hague", "geneva", "rental gandi", "c9", "c10"];
// declssaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "room",
    print: "ifloor",
    floor: 4,
    mine: true,
    roommates: ["a", "b", "c"],
};

let megaSentence;

megaSentence = 
"<p>My two top commutes from the array are: " 
+ myCommutes[0] + ", " 
+ myCommutes[5] + "</p>";
megaSentence = 
megaSentence 
+ "<p>My favourite commute possesses such characteristics: type - " 
+ myFavouriteCommute.type + ", floor " 
+ myFavouriteCommute.mine+ ", roommates : " 
+ myFavouriteCommute.roommates[0] + "</p>";

$("#output").html(megaSentence);

megaSentence = megaSentence 
+ "<p>My favourite commute possesses such characteristics: type - " 
+ myFavouriteCommute.type + ", floor " 
+ myFavouriteCommute.route + ", roommates : " 
+ myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);