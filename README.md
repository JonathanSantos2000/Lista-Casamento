# 📂 Estrutura do Projeto

O projeto segue uma arquitetura em camadas para facilitar a manutenção, escalabilidade e organização do código.

```text
src/
├── configs/
├── controllers/
├── interfaces/
├── middleware/
├── models/
├── repositories/
├── routers/
├── schemas/
├── services/
└── utils/
```

## 📁 configs

Contém configurações da aplicação e integrações externas.

---

## 📁 controllers

Responsáveis por receber as requisições HTTP e retornar as respostas.
O controller deve conter apenas a lógica necessária para processar a requisição e chamar os serviços da aplicação.

Recebe os dados enviados pelo cliente e chama o serviço responsável pelo cadastro.

---

## 📁 interfaces

Contém contratos TypeScript utilizados para tipagem da aplicação.

---

## 📁 middleware

Executados antes da requisição chegar ao controller.

---

## 📁 models

Representam as entidades armazenadas no banco de dados.
No MongoDB, normalmente são os Models do Mongoose.

---

## 📁 repositories

Responsáveis pelo acesso ao banco de dados.
Toda operação de persistência deve ser centralizada nesta camada.

---

## 📁 routers

Definem os endpoints da API e conectam as rotas aos controllers.

---

## 📁 schemas

Responsáveis pela validação dos dados recebidos pela aplicação.

---

## 📁 services

Contêm as regras de negócio da aplicação.
Os services fazem o processamento dos dados e utilizam os repositories para persistência.

---

## 📁 utils

Funções utilitárias reutilizáveis em diferentes partes do sistema.
