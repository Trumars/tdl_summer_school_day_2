import BasePage from "./basePage";
class WebTablesPage extends BasePage{
    static get url() {
        return "/webtables";
    }
    static get NewRecordButton() {
        return cy.get("[id='addNewRecordButton']");
    }
    static get FirstName() {
        return cy.get("[id='firstName']");
    }
    static get LastName() {
        return cy.get("[id='lastName']");
    }
    static get Email() {
        return cy.get("[id='userEmail']");
    }
    static get Age() {
        return cy.get("[id='age']");
    }
    static get Salary() {
        return cy.get("[id='salary']");
    }
    static get Department() {
        return cy.get("[id='department']");
    }
}

export default WebTablesPage