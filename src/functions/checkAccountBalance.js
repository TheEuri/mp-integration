var axios = require("axios").default;

async function checkAccountBalance(token, userId) {

    // Configurações da API do Mercado Pago
    var options = {
        method: 'GET',
        url: `https://api.mercadopago.com/users/${userId}/mercadopago_account/balance#json`,
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
