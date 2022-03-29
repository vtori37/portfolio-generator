var message = 'Hello Node!';

var sum = 5 + 3;

console.log(message);
console.log(sum);

var commandLinesArgs = process.argv;
console.log(commandLinesArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// / Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log('================');

  // Is the same as this...
  profileDataArr.forEach(profileItem => console.log(profileItem));
};