const fs = require('fs');// Required in order to use fs module
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [name, github] = profileDataArgs;  // Example of assignment destructuring

console.log(name, github);

const pageHTML = generatePage(Mateo, github);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});

