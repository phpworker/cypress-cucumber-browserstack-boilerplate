@pl @live @next
Feature: Google Search Functionality works on DE

  Background:
    Given I am on "pl" language version of Google Home page

  @browserstack
  Scenario Outline: I search for <phrase>
    When  I close cookie consent popup if visible
    And   I type "<phrase>" in Search bar
    Then  I see search results

    Examples:
      | phrase                                                    |
      | "cypress cucumber browserstack integration github<Enter>" |
      | "search2"                                                 |
