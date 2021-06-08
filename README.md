The purpose of this project is to have ready-to-use boilerplate project for Cypress automation tests. 
This project includes:
- cucumber-js integration
- browserstack integration (WiP)
- docker integration (in future)

## Prerequisites
Node.js 12.x or above installed and ready to be used. The setup was tested on MacOS Big Sur only.

## Installation

1. clone the repo

2. next, in root folder:
    ```
    npm run reinstall
    ```

## Running Cypress tests:

### Using Cucumber tags

Running smoke test scenarios on Alpha/Dev environment. For this case you need environments, countries and domains properly mapped in cypress.json. 
Here is an example:

  ```json
{
  "countries": [
    "@pl",
    "@de",
    "@fr"
  ],
  "environments": [
    "alpha",
    "next",
    "live"
  ],
  "domains": {
    "alpha": {
      "de": "alpha.google.de",
      "pl": "alpha.google.pl",
      "fr": "alpha.google.fr"
    },
    "next": {
      "de": "next.google.de",
      "pl": "next.google.pl",
      "fr": "next.google.fr"
    },
    "live": {
      "de": "www.google.de",
      "pl": "www.google.pl",
      "fr": "www.google.fr"
    }
}
  ```
For the purpose of this boilerplate, there is only live environment defined. After mapping domains, environments and countries you can start writing scenarios and run them like so:
  ```bash
  npx cypress run --env TAGS="@alpha and @de and @smoke"  
  ```

Or by providing host dynamically (note: tags for country and environment still are required). Here is an example for tests running in the browser:
  ```bash
  npx cypress open --env host="localhost:3000",TAGS="@alpha and @pl"
  ```

See also package.json file for some more details.
After running all scenarios, you should see a detailed report in the console and there should be HTML report generated in cypress/reports/html folder.
