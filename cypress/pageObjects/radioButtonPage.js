import BasePage from "./basePage";
class RadioButtonPage extends BasePage{
    static get url() {
        return "/radio-button";
    }
    static get YesButton() {
        return cy.get("[for='yesRadio']");
    }
    static get ImpressiveButton() {
        return cy.get("[for='impressiveRadio']");
    }
    static get Validation(){
        return cy.get("[class='text-success']");
    }
    static get NoButton(){
        return cy.get("[for='noRadio']");
    }
}

export default RadioButtonPage;