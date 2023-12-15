const fs = require('fs');
const inquirer = require('inquirer');
const markdownIt = require('markdown-it')();
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn profile link?',
  },
  {
    type: 'input',
    name: 'facebook',
    message: 'What is your facebook profile link?',
  },
];

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdownIt.render(data), (err) =>
    err ? console.error(err) : console.log('README.md generated successfully!')
  );
}

init();
