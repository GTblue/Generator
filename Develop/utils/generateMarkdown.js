// function to generate markdown for README

function createBadge(license){
  return `![${license}](https://img.shields.io/badge/license-${license}-blue.svg)`
}

function generateMarkdown(answers) {
  
  return `# ${answers.title}
  # ${answers.title}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribute)
  * [Test](#test)
  * [Questions](#questions)
  * [Badge](#)
  ## Description
  ${answers.description}
  ## Installation
  ${answers.installation}
  ## Usage
  ${answers.usage}
  ## License
  ${answers.license}
  ## Contributing
  ${answers.contribute}
  ## Test
  ${answers.test}
  ## Questions
  ${answers.questions}

  You may contact me with any questions on GitHub at https://github.com/${answers.username}.
 
  ##Badges
${createBadge(answers.license)}
  
`;
}

module.exports = generateMarkdown;
