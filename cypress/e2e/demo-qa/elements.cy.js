import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import WebTablesPage from "../../pageObjects/webTablesPage";

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
      CheckBoxPage.checkBoxes.contains("Notes").click();
      CheckBoxPage.checkBoxes.contains("React").click();
      CheckBoxPage.checkBoxes.contains("Angular").click();
      CheckBoxPage.checkBoxes.contains("File.doc").click();
      CheckBoxPage.Validation.should('include.text', 'notes');
      CheckBoxPage.Validation.should('include.text', 'react');
      CheckBoxPage.Validation.should('include.text', 'angular');
      CheckBoxPage.Validation.should('include.text', 'wordFile');
    });
    it.only("Checkbox scenario 2", () => {
      CheckBoxPage.Plus.should("be.visible").click();
      CheckBoxPage.checkBoxes.contains("Office").click();
      CheckBoxPage.Plus.should("be.visible").click();   // Click expand button
      CheckBoxPage.Validation.should('include.text', 'office');
    });
  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    it.only("RadioButton scenario 1", () => {
      RadioButtonPage.YesButton.click();
      RadioButtonPage.Validation.should('include.text', 'Yes' );
      RadioButtonPage.ImpressiveButton.click();
      RadioButtonPage.Validation.should('include.text', 'Impressive' );
      RadioButtonPage.NoButton.should('include.text', 'No');
    });
  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });
    it.only("Web tables Scenario 1:", () =>{
      WebTablesPage.NewRecordButton.should('be.visible').click();
      WebTablesPage.FirstName.should('be.visible').type('Viesturs');
      WebTablesPage.LastName.should('be.visible').type('Tru');
      WebTablesPage.Email.should('be.visible').type('trumars@lasersharks.com');
      WebTablesPage.Age.should('be.visible').type('21');      
      WebTablesPage.Salary.should('be.visible').type('3.50');
      WebTablesPage.Department.should('be.visible').type('Trade');
    });
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    it.only("Web tables Scenario 2:", () =>{
    // Delete all table rows
    // Validate that we see text - No rows found
    });
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
