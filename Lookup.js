// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
let result = false;
let value;
for(let i = 0; i < contacts.length; i++){
  if(contacts[i].firstName == name){
      value = i;
      result = true;
  }
}
if (result == true){
  if(contacts[value].hasOwnProperty(prop)){
    return contacts[value][prop];
  }
  else{
    return "No such property";
  }
}
else{
  return "No such contact";
}
  // Only change code above this line
}

lookUpProfile("Akira", "likes");