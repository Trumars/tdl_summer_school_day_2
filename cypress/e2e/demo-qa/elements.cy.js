import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });
    it("Filling in Text Boxes", () => {
      TextBoxPage.Name.should("be.visible").type("Viesturs T");
      TextBoxPage.Email.should("be.visible").type("trumars@lasersharks.com");
      TextBoxPage.CurrentAddress.should("be.visible").type("Liepaja, Inzenieru iela 101B");
      TextBoxPage.PermanentAddress.should("be.visible").type("Ventspis, Sporta iela 10A");
      TextBoxPage.Submit.should("be.visible").click();
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it.only("Checkbox scenario 1", () => {
      CheckBoxPage.Plus.should("be.visible").click();
      CheckBoxPage.Notes.should("be.visible").click({});
      CheckBoxPage.React.should("be.visible").click();
    });


    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
