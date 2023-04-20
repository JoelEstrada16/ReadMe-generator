// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None'){
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`
  } else {
    return ``
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != 'None'){
    return `[${license}](https://choosealicense.com/licenses/${license.replace(/ /g, '-')}/)`
  } else{
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license != 'None'){
  return `## License
  This project is using the ${license} license. If you wanna learn more about it click the license.`
} else {
  return ``
}
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  GitHub:[${data.github}](https://github.com/${data.github})
  Email:${data.email}

`;
}

module.exports = generateMarkdown;
