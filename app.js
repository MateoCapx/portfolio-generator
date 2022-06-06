const inquirer = require('inquirer')

inquirer 
  .prompt([
    {

      type: 'input',
      name: 'name',
      message: 'What is your team?'


    }

  ])
.then(answers => console.log(answers));















// const fs = require('fs'); // Required in order to use fs module
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });




// const profileDataArgs = process.argv.slice(2); //The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched.
