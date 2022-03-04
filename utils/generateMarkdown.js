// TODO: Create a function that returns a license badge based on which license is passed in
let licenseBadge = ``;
let licenseLink = ``;
let licenseSection = ``;
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (`${data.license}` === `BSD`) {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (`${data.license}` === `MIT`) { 
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (`${data.license}` === `GPL`) {
    licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    licenseBadge = ``;
  };
   return licenseBadge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (`${data.license}` === `BSD`) {
    licenseLink = `[BSD](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (`${data.license}` === `MIT`) {
    licenseLink = `[MIT](https://opensource.org/licenses/MIT)`
  } else if (`${data.license}` === `GPL`) {
    licenseLink = `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  } return licenseLink
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (`${data.license}` === `BSD`) {
    licenseSection = `Licensed under the ` + licenseLink + ` license`
  } else if (`${data.license}` === `MIT`) {
    licenseSection = `Licensed under the ` + licenseLink + ` license`
  } else if (`${data.license}` === `GPL`) {
    licenseSection = `Licensed under the ` + licenseLink + ` license`
  } return licenseSection
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
\n
` + 
licenseBadge
+ `\n
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.github}

## License \n`

+

`\n`

+

licenseSection

+

`
## Tests
${data.test}

## Questions
[${data.github}](https://github.com/${data.github}) \n
[${data.email}](mailto:${data.email})
`
};

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, licenseBadge};
