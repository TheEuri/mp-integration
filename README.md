# mp-integration
 > Biblioteca para integrar algumas coisas do mercado pago com a sua aplicação ;D

## 🔩 O que ela faz?

**Atualmente** a biblioteca conta com **2 funções pricipais** sendo elas:
* **Checar saldo no Mercado Pago**(Saldo disponível, Saldo bloqueado, Saldo pendente).
* **Checar status e informações de transações** a partir do seu ID.

## 📔 Como usar?

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
let response = await mpIntegration.checkPaymentStatus(transactionID(Id da transação a ser checada));
```

****Versão não assíncrona***

```js
mpIntegration.checkPaymentStatus(transactionID(Id da transação a ser checada)).then(response => {

});
```

**Exemplo de resposta da biblioteca:**
Dados falsos!

```json
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

