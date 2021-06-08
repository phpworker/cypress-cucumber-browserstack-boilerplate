/// <reference types="Cypress" />
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import {Visitor} from "../../support/utils";
import * as selFixture from "../../fixtures/selectors";

let visitor = new Visitor();
let selectors = selFixture.googleHomePage;

Before(() => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
});

Given(/^I close cookie consent popup if visible$/, function () {
    cy.get('body').then(($body) => {
        if ($body.find(selectors.cookieConsentPopupBtn).length) {
            cy.get(selectors.cookieConsentPopupBtn).then(btn => {
                if (btn.is(':visible')) {
                    cy.log("consent visible...");
                    btn.click();
                }
            });
        }
    });
});

Given(/^I am on "(en|de|pl|fr)" language version of Google Home page$/, (lang) => {
    cy.server().then(() => {
        cy.log(`Opening the Google Homepage in ${lang} version ...`);
        visitor.visitGoogleHomePage(lang);
        cy.waitUntil(() => cy.url().should('contain', 'google'), {timeout: 20000});
    });
});

And(`I type {string} in Search bar`, (phrase) => {
    cy.get(selectors.form.searchBar).click().type(phrase);
    cy.get(selectors.searchBtn).click();
});

And(`I click Search button`, () => {
    cy.get(selectors.searchBtn).click();
});

Given(/^I select language$/, () => {
    cy.get(selectors.langSel).click();
});

Then(/^I see search results$/, function () {
    cy.get(selectors.searchResults).should('be.visible');
});