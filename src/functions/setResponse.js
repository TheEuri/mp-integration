async function setResponse(apiResponse) {

    switch (apiResponse.paging.total) {

        // Caso não haja nenhuma transação 
        case 0:
            return { status: 404, message: "Transação não encontrada" };

        // Caso ele encontre uma transação
        case 1:

            let results = apiResponse.results[0];
            let transactionDetails = function (statusID) {
                return {
                    id: results.id, // Id da transação.
                    external_reference: results.external_reference, // Referência externa.
                    status: statusID, // Status de acordo com nossa legenda.
                    status_message: results.status_detail, // Mensagem de detalhação do status (Por par do Mercado Pago).
                    transaction_amount: results.transaction_amount, // Valor da Transação.
                    transaction_amount_refunded: results.transaction_amount_refunded, // Valor reembolsado da transação.
                    payment_method_id: results.payment_method_id, // Método de pagamento.
                    payment_type_id: results.payment_type_id, // Tipo de pagamento.
                    date_created: results.date_created, // Data de criação da transação.
                    date_approved: results.date_approved, // Data de aprovação da transação.
                    date_money_release: results.money_release_date, // Data de liberação do dinheiro.
                    operation_type: results.operation_type, // Tipo de transação.
                    description: results.description, // Descrição de pagamento.
                    payer: { // Informações do comprador.
                        email: results.payer.email, // Email.
                        id: results.payer.id, // ID da conta da pessoa que pagou.
                        identification: results.payer.identification, // Identificações da mesma.
                        phone: results.payer.phone, // Telefone da mesma.
                        first_name: results.payer.first_name, // Primeiro nome da mesma.
                        last_name: results.payer.last_name // Último nome da mesma.
                    },
                    card_founds_captured: results.captured, // Se os fundos(dinhheiro) já foram débitados do cartão.
                    card: results.card, // Informações do cartão utilizado se utilizado.
                    order_identification: results.order, // Informações de onde a transação foi realizada (Mercado livre, Mercado Pago).
                    currency: results.currency_id, // Moeda urilizada para pagamento
                    transaction_details: results.transaction_details, // Informações sobre a transação
                    fee_details: results.fee_details, // Detalhes das taxas pagas
                    refunds: results.refunds // Lista todos os reembolsos da transação e seus detalhes
                }
            };

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

            switch (results.status) {
                case "approved":
                    return transactionDetails(0);

                case "pending":
                    return transactionDetails(1);

                case "authorized":
                    return transactionDetails(2);

                case "in_process":
                    return transactionDetails(3);

                case "in_mediation":
                    return transactionDetails(4);

                case "rejected":
                    return transactionDetails(5);

                case "cancelled":
                    return transactionDetails(6);

                case "refunded":
                    return transactionDetails(7);

                case "charged_back":
                    return transactionDetails(8);

                // Caso dê algo de errado
                default:
                    return { status: 406, message: "API do marcado pago recusou o request ou não respondeu o mesmo" };
            }

        // Caso dê algo de errado
        default:
            return { status: 406, message: "API do marcado pago recusou o request ou não respondeu o mesmo" };
    }

}

module.exports = setResponse;