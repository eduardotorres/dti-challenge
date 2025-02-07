# DTI QA Challenge

O projeto trata-se de automatizar testes da tela de Login do site [Automation Practice](http://www.automationpractice.pl/index.php?controller=authentication&back=my-account)

## Requisitos

Ferramentas:

- [VSCode](https://code.visualstudio.com/Download)
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)

Instalar o cypress:
   - npm install -D cypress@7.7.0
Instalar o cucumber:
   - npm install --save-dev cypress cypress-cucumber-preprocessor

## Estrutura de diretórios

```js
./projeto
├─ cypress/
    ├─ fixtures
    └─ integration/
        └─ Login.feature
    └─ plugins/
        └─ index.js
    └─ support/
       └─ elements
          └─ LoginElements.js 
       └─ pageobjects
          └─ LoginPage.js    
       └─ steps
          └─ LoginSteps.js           
       ├─ commandsContas.js
       └─ index.js
```


## Executando via linha de comando

Abrir a ferramenta

`npx open cypress`

---

Executar os testes no browser Chrome </p>

`npm run test:chrome`

---


