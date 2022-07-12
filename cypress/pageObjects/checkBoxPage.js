import BasePage from "./basePage";

class CheckBoxPage extends BasePage{
  static get url() {
    return "/checkbox";
  }
  static get Plus() {
    return cy.get("[title='Expand all']");
  }
  static get Notes() {
    return cy.get("[class='rct-title'Notes]");
  }
// Click React, Angular, General, Excel File.doc
  static get React(){
    return cy.get("[id='tree-node-react']");
  }
  static get Angular(){
    return cy.get("[class='']");
  }
  static get General(){
    return cy.get("[class='']");
  }
  static get Excel(){
    return cy.get("[class='']");
  }
  static get FileDoc(){
    return cy.get("[class='']");
  }

}

export default CheckBoxPage;