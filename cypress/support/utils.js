/// <reference types="Cypress" />

export const configReader = {
    matchTag: (item) => {
        let tags = Cypress.env('TAGS');
        let match = tags.match(item);
        if (match != null && match.length > 0) {
            return true;
        }
        return false;
    },
    getCountry: () => {
        let countries = Cypress.config('countries');
        let country = countries.find(configReader.matchTag);
        return country.replace('@', '');
    },
    getEnvironment: () => {
        let envs = Cypress.config('environments');
        return envs.find(configReader.matchTag);
    },
    getHost: () => {
        let country = configReader.getCountry();
        let env = configReader.getEnvironment();
        let domains = Cypress.config("domains");
        return (Cypress.env('host').length > 0)? Cypress.env('host') : domains[env][country];
    }
};

export class Visitor {
    constructor() {
        this.host = configReader.getHost();
    }

    visitGoogleHomePage() {
        let url = `https://${this.host}`;
        this.visitUrl(url);
    }

    visitUrl(url) {
        console.log("url:", url);
        cy.visit(url);
        cy.log('finished');
    }
}


