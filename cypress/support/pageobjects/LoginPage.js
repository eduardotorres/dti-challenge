import { loginElements } from "../elements/LoginElements"
import {email, password, invalidEmail, invalidPass} from "../../fixtures/login.json"

const url = Cypress.config("baseUrl")

class LoginPage {

    acessarSite() {
        cy.visit(url)
    }

    inserirEmail() {
        cy.get(loginElements.emailAddressField).should('be.visible').type(email)
    }

    inserirPassword() {
        cy.get(loginElements.passwordField).should('be.visible').type(password)
    }

    validarLogin() {
        cy.contains("Women")
        cy.contains("Dresses")
        cy.contains("T-shirts")
        cy.contains("Blog")
        
    }

    inserirEmailInvalido() {
        cy.get(loginElements.emailAddressField).should('be.visible').type(invalidEmail)
    }

    inserirPasswordInvalido() {
        cy.get(loginElements.passwordField).should('be.visible').type(invalidPass)
    }

    clicarSignIn() {
        cy.get(loginElements.signInButton).should('be.visible').click()
    }

    clicarRecoveryPass() {
        cy.get(loginElements.recoveryPasswordLink).should('be.visible').click()
    }

    clicarRetrievePass() {
        cy.get(loginElements.retrievePasswordButton).should('be.visible').click()
    }

    validarMensagem(mensagem) {
        cy.contains(mensagem).should('be.visible')
    }
}

export default LoginPage