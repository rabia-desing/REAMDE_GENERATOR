// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return licenseString
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data)}
## Table of Contents:
1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description
${data.description} 

## Installation
${data.installation}

## Usage

${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This application is covered under ${renderLicenseBadge(data)}

## Questions
You can reachout to me via my github profile or you can send me email with additional questions.

### Link to my GitHub profile
https://github.com/${data.github}

### Use my E-mail address for additional questions
${data.email}`
}

module.exports = generateMarkdown;
