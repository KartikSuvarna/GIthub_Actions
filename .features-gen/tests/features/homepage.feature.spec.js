// Generated from: tests\features\homepage.feature
import { test } from "playwright-bdd";

test.describe('Homepage Functionality', () => {

  test('Valid login', async ({ Given, When, Then, And, page }) => { 
    await Given('the user is on the homepage', null, { page }); 
    await When('the user enters Username "tomsmith"', null, { page }); 
    await And('the user enters Password "SuperSecretPassword!"', null, { page }); 
    await And('the user clicks the Login button', null, { page }); 
    await Then('the user should be redirected to the dashboard', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\homepage.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user is on the homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user enters Username \"tomsmith\"","stepMatchArguments":[{"group":{"start":25,"value":"\"tomsmith\"","children":[{"start":26,"value":"tomsmith","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And the user enters Password \"SuperSecretPassword!\"","stepMatchArguments":[{"group":{"start":25,"value":"\"SuperSecretPassword!\"","children":[{"start":26,"value":"SuperSecretPassword!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user clicks the Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the dashboard","stepMatchArguments":[]}]},
]; // bdd-data-end