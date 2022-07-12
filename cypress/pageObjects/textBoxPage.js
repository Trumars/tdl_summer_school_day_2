import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }
  static get xxx() {
    return cy.get("xxx");
  }
  static get Name() {
    return cy.get("[id='userName']");
  }
  static get Email() {
    return cy.get("[id='userEmail']");
  }
  static get CurrentAddress() {
    return cy.get("[id='currentAddress']");
  }
  static get PermanentAddress() {
    return cy.get("[id='permanentAddress']");
  }
  static get Submit() {
    return cy.get("[id='submit']");
  }
}

export default TextBoxPage;
