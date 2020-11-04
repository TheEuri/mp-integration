var axios = require("axios").default;

async function checkAccountBalance(token) {

    // Configurações da API do Mercado Pago
    var options = {
        method: 'GET',
        url: 'https://api.mercadopago.com/users/309954883/mercadopago_account/balance#json',
        params: {
            access_token: token
        }
    };

    // Request sendo feito para API.
    return axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = checkAccountBalance;
