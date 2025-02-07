Feature: Validar Login

    Scenario: Realizar login com sucesso
        Given acesso a pagina de login
        When inserir email e senha validos
        Then o login deve ser realizado com sucesso  
        
    Scenario: Inserir email invalido
        Given acesso a pagina de login
        When inserir email invalido
        Then devo visualizar a mensagem "Invalid email address."           

    Scenario: Inserir apenas email e retornar mensagem de erro  
        Given acesso a pagina de login
        When inserir apenas o email
        Then devo visualizar a mensagem "Password is required."

    Scenario: Inserir apenas password e retornar mensagem de erro  
        Given acesso a pagina de login
        When inserir apenas o password
        Then devo visualizar a mensagem "An email address required."        

    Scenario: Recuperar a senha 
        Given acesso a pagina de login
        And acesso a pagina de recuperacao de senha
        When inserir meu email
        Then devo visualizar a mensagem "A confirmation email has been sent to your address: "         