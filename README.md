# libCpf
# Validador de CPF
Biblioteca que verifica e valida CPF.

**Biblioteca destinada à validação de números de CPF, para uso em aplicações web.**
Nesta versão a biblioteca:
 * verifica se os números inseridos não são iguais;
 * verifica se não tem letras;
 * verifica se o tamanho do cpf informado é igual a 11;

## Como instalar:
```shell

$  npm install cpfValidatorln```

## Como utilizar:

```node

> const validate = require("cpfValidatorln");
> validate.cpfValidator('31306573041')
> // returns "true"```


## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: verifica e valida números de CPF.
#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação da opção de gerar números válidos de CPF;

