# mp-integration
 > Biblioteca para integrar algumas coisas do mercado pago com a sua aplicação ;D

## 🔩 O que ela faz?

**Atualmente** a biblioteca conta com **2 funções pricipais** sendo elas:
* **Checar saldo no Mercado Pago**(Saldo disponível, Saldo bloqueado, Saldo pendente).
* **Checar status e informações de transações** a partir do seu ID.

## 📟 Como pegar seu access token?

Primeiro você deve ascessar a área de credenciais do Mercado Pago [Clicando aqui](https://www.mercadopago.com.br/settings/account/credentials).

Depois você de você solicitar suas credenciais de produção você deve seguir estes passos:

**1°** Clique em credenciais de produção:

![](https://cdn.discordapp.com/attachments/680476162438201366/773690461482254346/Screenshot_1201.png)

**2°** Clique no olhinho para mostrar seu Access Token e o copie **e pronto você agora já tem o seu token 😋**

![](https://cdn.discordapp.com/attachments/680476162438201366/773690436572151808/Screenshot_1202.png)


## 📔 Como usar?

### 🧬 Função de checar saldo e outras informações da conta

Primeiro você precisa criar o objeto mpIntegration:

```js
const mp_integration = require('mp-integration');

const mpIntegration = new mp_integration({
  token: 'Seu token do mercado pago(Tem que ser o de produção)'
});
```

Segundamente você deve declarar a função:
****Versão assíncrona***

```js
let response = await mpIntegration.accountBalance();
```

****Versão não assíncrona***

```js
mpIntegration.accountBalance().then(response => {
});
```

**Exemplo de resposta da biblioteca:**
Dados falsos!

```js
{
  last_modified: '2020-10-28T16:22:24-04:00',
  user_id: 109876298,
  total_amount: 0,
  pending_to_review: 0,
  available_balance: 0,
  unavailable_balance: 0,
  currency_id: 'BRL',
  tags: [ 'assets_invested' ],
  block_reason: null,
  unavailable_balance_by_reason: [],
  available_balance_by_transaction_type: [
    { transaction_type: 'payment', amount: 0 },
    { transaction_type: 'label_purchase', amount: 0 },
    { transaction_type: 'withdrawal', amount: 0 },
    { transaction_type: 'transfer', amount: 0 }
  ]
}
```

### 🧬 Função de checar status e informações de transações

Primeiro você precisa criar o objeto mpIntegration:

```js
const mp_integration = require('mp-integration');

const mpIntegration = new mp_integration({
  token: 'Seu token do mercado pago(Tem que ser o de produção)'
});
```

Segundamente você deve declarar a função:
****Versão assíncrona***

```js
let response = await mpIntegration.checkPaymentStatus(transactionID);
```

> transactionID === Id da transação a ser checada

****Versão não assíncrona***

```js
mpIntegration.checkPaymentStatus(transactionID).then(response => {
});
```
> transactionID === Id da transação a ser checada

**Exemplo de resposta da biblioteca:**
Dados falsos!

```js
{
  id: 11935428762,
  external_reference: 'money_transfer-1569060b-7c2a-43d5-ac7d-fdeff2415ce1',
  status: 7,
  status_message: 'refunded',
  transaction_amount: 60,
  transaction_amount_refunded: 60,
  payment_method_id: 'master',
  payment_type_id: 'credit_card',
  date_created: '2020-10-12T16:22:38.000-04:00',
  date_approved: '2020-10-12T16:22:40.000-04:00',
  date_money_release: '2020-10-12T16:22:40.000-04:00',
  operation_type: 'money_transfer',
  description: null,
  payer: {
    email: null,
    id: '560149926',
    identification: {},
    phone: {},
    first_name: null,
    last_name: null
  },
  card_founds_captured: true,
  card: {
    cardholder: { identification: [Object], name: 'JOAOZINHO F J EURINO' },
    date_created: '2020-10-10T17:41:17.000-04:00',
    date_last_updated: '2020-10-11T16:15:11.000-04:00',
    expiration_month: 9,
    expiration_year: 2045,
    first_six_digits: '230755',
    id: '7942945703',
    last_four_digits: '9746'
  },
  order_identification: {},
  currency: 'BRL',
  transaction_details: {
    acquirer_reference: null,
    external_resource_url: null,
    financial_institution: null,
    installment_amount: 60,
    net_received_amount: 60,
    overpaid_amount: 0,
    payable_deferral_period: null,
    payment_method_reference_id: '109451592',
    total_paid_amount: 60
  },
  fee_details: [],
  refunds: [
    {
      adjustment_amount: 0,
      amount: 60,
      date_created: '2020-10-12T16:22:24.000-04:00',
      external_refund_id: null,
      id: 605681054,
      metadata: {},
      payment_id: 109451592,
      reason: null,
      refund_mode: 'standard',
      source: [Object],
      status: 'approved',
      unique_sequence_number: null
    }
  ]
}
```

**Possíveis Status retornados:**

       // Status = 0 Transação aprovada.
       // Status = 1 Transação Pendente.
       // Status = 2 Transação autorizada, porém ainda não creditada.
       // Status = 3 Transação em verificação pelo Mercado Pago.
       // Status = 4 Transação em mediação, quando alguem inicia uma disputa.
       // Status = 5 Transação rejeitada.
       // Status = 6 Transação cancelada, uma das partes cancelou a transação ou foi cancelado por cauda do tempo de pagamento expirou.
       // Status = 7 Transação reembolsada.
       // Status = 8 Transação estornada pelo cartão de crédito.
       // Status = 404 Transação não encontrada pois ela não existe.
       // Status = 406 API do marcado pago recusou o request ou não respondeu o mesmo.

## 📝 Suporte:
Se tiver algum problema não exite em abrir uma issue ou chamar no Discord: Euri#1241 
