// export function funTime(){
//     return y
// };
let myCollection = [
  {
    name: "School of Code mug",
    count: 1,
    whatILike: "It has my cute pixel character on it!",
  },
  {
    name: "School of Code hat",
    count: 2,
    whatILike: "An often overlooked fashion accessory",
  },
  {
    name: "School of Code pillow",
    count: 1,
    whatILike: "Eat. Sleep. Code. Repeat :)",
  },
];
console.log(myCollection);

// Create a function called describeItem, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should console.log a message according to how many of the item you have.

function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have a ${item.name}. Here's what I like about it: ${item.whatILike}.`
    );
  } else {
    console.log(
      `I have ${item.count} ${item.name}. Here's what I like about them: ${item.whatILike}.`
    );
  }
}

describeItem(myCollection[1]);

function describeCollection(array) {
  array.forEach(describeItem, myCollection);
}

describeCollection(myCollection);
