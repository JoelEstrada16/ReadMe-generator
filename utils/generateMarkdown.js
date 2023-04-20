
function renderLicenseBadge(license) {
  if (license != 'None'){
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`
  } else {
    return ``
  } 
}

function renderLicenseLink(license) {
  if(license != 'None'){
    return `[${license}](https://choosealicense.com/licenses/${license.replace(/ /g, '-')}/)`
  } else{
    return ``
  }
}


function renderLicenseSection(license) {
if (license != 'None'){
  return `## License
  This project is using the ${license} license. If you wanna learn more about it click the license.`
} else {
  return ``
}
}


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
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Demo](#demo)

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

  ## Demo



  ## Questions

  GitHub:[${data.github}](https://github.com/${data.github})

  Email: ${data.email}

  ## Credits

  ${data.name}

`;
}

module.exports = generateMarkdown;
