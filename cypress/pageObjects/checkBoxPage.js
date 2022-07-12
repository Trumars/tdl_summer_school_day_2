import BasePage from "./basePage";

class CheckBoxPage extends BasePage{
  static get url() {
    return "/checkbox";
  }
  static get Plus() {
    return cy.get("[title='Expand all']");
  }

  static get checkBoxes() {
    return cy.get("[class='rct-title']");
  }
  static get Validation() {
    return cy.get("[class='text-success']");
  }

}

export default CheckBoxPage;