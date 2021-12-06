// export function funTime(){
//     return y
// };

import myCollection from "./collections.js";

function describeItem(item) {
  if (item.count === 1) {
    console.log(
      `I have a ${item.name}. Here's what I like about it: ${item.whatILike}.`
    );
  } else {
    console.log(
      `I have ${item.count} ${item.name}s. Here's what I like about them: ${item.whatILike}.`
    );
  }
}

function describeCollection(array) {
  array.forEach(describeItem);
}

describeCollection(myCollection);
