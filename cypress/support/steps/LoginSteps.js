/* global Given, Then, When */

import {Given} from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pageobjects/LoginPage'

const loginPage = new LoginPage


Given("acesso a pagina de login", () => {
    loginPage.acessarSite()
})

When("inserir email e senha validos", () => {
    loginPage.inserirEmail()
    loginPage.inserirPassword()
    loginPage.clicarSignIn()
})

Then("o login deve ser realizado com sucesso", () => {
    loginPage.validarLogin()    
})

Then("devo visualizar a mensagem {string}", (mensagem) => {
    loginPage.validarMensagem(mensagem)
})

When("inserir email invalido", () => {
    loginPage.inserirEmailInvalido()
    loginPage.inserirPassword()
    loginPage.clicarSignIn()
})

When("inserir apenas o email", () => {
    loginPage.inserirEmail()
    loginPage.clicarSignIn()
})

When("inserir apenas o password", () => {
    loginPage.inserirPassword()
    loginPage.clicarSignIn()
})

When("inserir meu email", () => {
    loginPage.inserirEmail()
    loginPage.clicarRetrievePass()
})

And("acesso a pagina de recuperacao de senha", () => {
    loginPage.clicarRecoveryPass()
})

