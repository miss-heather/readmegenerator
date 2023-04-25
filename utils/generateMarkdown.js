const licenseArr = ["Apache", "Eclipse",  "MIT", "Mozilla"]

function renderLicenseBadge(license) {
 if (license===licenseArr[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArr[1]){
    return "[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  } else if (license===licenseArr[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[3]){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return ""

  }
}

function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://opensource.org/licenses/EPL-2.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://opensource.org/licenses/MPL-2.0)`
  } else {
    return ""
  }
}

function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else {
    return ""
  }
}

var contactMe = ("Please feel free to reach out with any questions! GitHub: https://github.com/miss-heather or send an email to heather.hawkes808@gmail.com.");

function generateMarkdown(data) {
  return `# ${data.name}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

* [Installation](#instillation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Licensing](#licensing)
* [Contact Info](#contact)
* [Questions](#questions)

  
  ## Description

  ${data.description}


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contribute}

  ## Tests

  ${data.tests}

  ## Licensing

  ${data.license}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contact

  ${data.contact}
  

  ${contactMe}
  `;
}

module.exports = generateMarkdown;
