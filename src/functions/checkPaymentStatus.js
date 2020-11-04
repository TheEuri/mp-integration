const axios = require("axios").default;
const setResponse = require("./setResponse.js");

async function chkPaymentStatus(token, paymentId) {

    function apiResponse(token, paymentId) {

        // Configurações da API do Mercado Pago
        // Procura por uma transação pelo ao ID da mesma.
        var options = {
            method: 'GET',
            url: 'https://api.mercadopago.com/v1/payments/search',
            params: {
                access_token: token,
                status: 'approved',
                offset: '0',
                id: paymentId
            }
        };

        // Request sendo feito para API.
        return axios.request(options).then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }

    // Executa a função de dar o request na API do mercado pago
    let mpResponse = await apiResponse(token, paymentId);

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

    // Executa a função de montar a resposta desta função.
    return setResponse(mpResponse);

}

module.exports = chkPaymentStatus;