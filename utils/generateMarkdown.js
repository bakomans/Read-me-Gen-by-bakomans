function generateMarkdown(data) {
  
  function getLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'GPL 3.0':
        return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'BSD 3-Clause':
        return '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      default:
        return '';
    }
  }

  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${getLicenseBadge(data.license)}

This project is licensed under the **${data.license} License**.

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or concerns, please contact me at [${data.email}](mailto:${data.email}).

You can also find more information and my other projects on:

[LinkedIn](${data.linkedin}) | [GitHub](${data.github})
`;
}

module.exports = generateMarkdown;
