const fs = require('fs');
const { readme } = require('lodash');

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contribution,
  tests,
  license,
  gitHub,
  email
})=> {
  console.log('Making the README file... ');
  const README = (
    `
  
# ${title}

# Table of Contents
1. [Description](#description)
2. [License](#license)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributions
${contribution}

## Tests
${tests}

## License
This project was covered uner the ${license} license.
<img src="https://img.shields.io/badge/license-${license}-red" alt="badge-${license}" />

## Questions
Email me or visit my github profile here for more info!

GitHub: https://github.com/${gitHub}

Email: ${email}`
  );
  fs.writeFileSync('./readme/README.md', README);
  console.log('All done, your README File is ready to go!');
  process.exit();
};

module.exports = {
  generateMarkdown
};