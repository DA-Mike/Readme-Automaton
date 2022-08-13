// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
  licenseBadge = `https://img.shields.io/badge/License-${license}-green`;
  return licenseBadge;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseUrl;

  switch(license) {
    case 'BSD 3':
      licenseUrl = 'https://www.openbsd.org/policy.html';
      break;
    case 'BSD 2':
      licenseUrl = 'https://www.openbsd.org/policy.html';
      break;
    case 'GPL':
      licenseUrl = 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'LGPL':
      licenseUrl = 'https://www.gnu.org/licenses/lgpl-3.0.en.html';
      break;
    case 'MIT license':
      licenseUrl = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Mozilla Public License 2.0':
      licenseUrl = 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'ISC':
      licenseUrl = 'https://choosealicense.com/licenses/isc/';
      break;
    case 'Eclipse Public License v2.0':
      licenseUrl = 'https://www.eclipse.org/legal/epl-2.0/';
      break;
    case 'No License':
      licenseUrl = 'No License.';
      break;
  }
  return licenseUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [!]${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.contents}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Testing

  ${data.test}

  ## Questions

  If you have any questions, please feel free to contact us at ${data.contact}

  ## License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;