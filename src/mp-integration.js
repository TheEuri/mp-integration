const checkPaymentFunction = require("./functions/checkPaymentStatus.js");
const checkAccountBalance = require("./functions/checkAccountBalance.js");

class mpIntegration {

    constructor(data = {}) {
        // Se o token da aplicação do mercado pago não for especificado será lançado um erro.
        if (!data.token) throw new Error("O Token do Mercado Pago não foi específicado");
        this.token = data.token;
    }

    accountBalance() {
        return checkAccountBalance(this.token);
    }

    checkPaymentStatus(transactionID) {
        return checkPaymentFunction(this.token, transactionID);
    }

    
}

module.exports = mpIntegration;