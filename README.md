# mp-integration
 > Biblioteca para integrar algumas coisas do mercado pago com a sua aplicação ;D

## 🔩 O que ela faz?

**Atualmente** a biblioteca conta com **2 funções pricipais** sendo elas:
* **Checar saldo no Mercado Pago**(Saldo disponível, Saldo bloqueado, Saldo pendente).
* **Checar status e informações de transações** a partir do seu ID.

## 📔 Como usar?

### 🧬 Função de status e informações de transações

Primeiro você precisa criar o objeto mpIntegration:

```js
const mp_integration = require('mp-integration');

const mpIntegration = new mp_integration({
  token: 'Seu token do mercado pago(Tem que ser o de produção)'
});
```
