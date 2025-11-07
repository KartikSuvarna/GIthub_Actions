Feature: Homepage Functionality

  Scenario: Valid login
    Given the user is on the homepage
    When the user enters Username "tomsmith"
    And the user enters Password "SuperSecretPassword!"
    And the user clicks the Login button
    Then the user should be redirected to the dashboard
