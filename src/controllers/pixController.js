const EfiPay = require('sdk-node-apis-efi');
const options = require("../../credentials.js")

const efipay = new EfiPay(options);

const pixCreateImmediateCharge = (req, res) => {
  let body = {
    calendario: {
      expiracao: 3600,
    },
    devedor: {
      cpf: '94271564656',
      nome: 'Gorbadock Oldbuck',
    },
    valor: {
      original: '123.45',
    },
    chave: '1b7884d6-ce50-4edc-b45e-11d39b61470b', // Informe sua chave Pix cadastrada na efipay.	
    infoAdicionais: [
      {
        nome: 'Pagamento em',
        valor: 'NOME DO SEU ESTABELECIMENTO',
      },
      {
        nome: 'Pedido',
        valor: 'NUMERO DO PEDIDO DO CLIENTE',
      },
    ],
  }
  
  efipay.pixCreateImmediateCharge([], body)
    .then((resposta) => {
      console.log(resposta)
      res.send(resposta)
    })
    .catch((error) => {
      console.log(error)
    })
}

module.exports = {
  pixCreateImmediateCharge
}