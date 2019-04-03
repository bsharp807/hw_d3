// --- ONE ---
/*
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
// console.log(verdict);
*/

// output prediction: 'the murderer is Miss Scarlet'
// actual result: as predicted. this happens because all the variables are in the main block and thus their scope overlaps such that the console log produces the verdict

// --- TWO ---
/*
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/

// output prediction: we'll get an error as we're running a function to change a const that's in the same block.
// actual result: assignment is const variable error due to aforementioned attempt to change const that's in the same block.

//  --- THREE ---
/*
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
*/

// output prediction: first verdict is going to say mrs peacock, second prof Plum
// actual result: as expected. the let variable allows the murderer to be changed, but as it's only in the function block it only changes for the function and not in the overall segment.

//  --- FOUR ---

/*
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
*/

// output prediction: we'll see scarlet, plum and mustard then suspect three will be Peacock
// actual result: as expected. the let in the function only changes 3 for the function which is tied into the suspects string, and as it is blockscoped into there the global suspect 3 as it were remains unchanged and thus stays as peacock.

// --- FIVE ---
/*

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

*/

// output prediction: we'll get an error as the function is trying to change a part of the const defined object.
// actual result: 'the weapon is a revolver'. the explanation I can think of here is that the keys of an object are not locked like strings but act more as arrays. This makes some sense; presumably you can add new keys to a const defined object, so changing values is also possible.

// --- SIX ---

/*
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/

// output prediction: error message; while the first change is fine as we are changing a let, the second instance in the plotTwist function is attempting to change a const and thus will fail
// actual result: 'the murderer is mrs. white' - I got confused and mixed up m y variables. Murderer in each of nthe functions is being defined as a global variable which can be changed. I was seeing the const defining the functions and thinking they applied to the murderer variable. Woops.

// --- SEVEN ---

/*
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
*/


// outcome prediction: this is a tough one, but I think miss scarlet will be revealed as the murderer. Col Mustard is the last to be defined, but his variable is a let blockscoped deep inside the nested functions. Miss Scarlet on the other hand is a global variable and as the declareMurderer function is uses the murderer variable outwith the nested functions it's not going to pick up mustard.
// actual result: Mr Green. The unexpectedOutcome function is not nested within plotTwist but is in fact within the same block. Here's what I think is happening: global murderer is changed to mr green first; the plotTwist and unexpectedOutcome murderers are linked due to being on the same level. The change from mustard to scarlet back to mustard but have no bearing on the murderers above them, thus green stays the murderer in the end. He can do this as let was used to initially define the murderer.

// --- EIGHT ---
/*
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
*/

// output prediction: lead pipe. the const at the top is an object; changes can be made to it. The functions work in the following order: changeScenario - murderer set to peacock, room set to dining too; unexpectedOutcome - nothing happens as col mustard is not the murderer; plotTwist - murderer is changed to mustard. The weapon hasn't changed throughout, so it remains as the lead pipe.
// actual result: candle stick. these functions play through their arguments then repeat them after running throught them once. Mustard gets switched in and this causes the later iterations to switch out the weapon.

// --- NINE ---
/*
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
*/

// output prediction: plum. peacock is defined as murderer in her block, but it's not in the scope of the declareMurderer function.
// actual result: plum, for the reasons described above.

// --- EXTENTION ---

let genderPronoun = "her";
const murderer = {
  name: "Mycroft Holmes",
  weapon: "acerbic wit",
  room: "Conservatory",
  gender: "Male"
}

const changeMurderer = (newRoom) => {
  murderer.name = "Moriarty";
  murderer.room = newRoom;
  let leftField = function() {
    if (murderer.name === "Sherlock Holmes"){
          murderer.weapon = newRoom;
        }
  }
  let loopField = function() {
    if (murderer.room === "Toilet"){
      murderer.name = "Sherlock Holmes"
    }
    leftField();
  }
  loopField();
}

changeMurderer("Kitchen");

if (murderer.gender === "Male"){
  genderPronoun = "his";
}

changeMurderer("Toilet");
const declareWeapon = function() {
  return `The weapon was ${genderPronoun} ${murderer.weapon}`
}
const verdict = declareWeapon();
console.log(verdict);
console.log(murderer);
