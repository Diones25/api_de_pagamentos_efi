const EfiPay = require('sdk-node-apis-efi');
const options = require("../../credentials.js")

const efipay = new EfiPay(options);

const pixCreateImmediateCharge = (req, res) => {
  let body = {
    calendario: {
      expiracao: req.body.calendario.expiracao,
    },
    devedor: {
      cpf: req.body.devedor.cpf,
      nome: req.body.devedor.nome,
    },
    valor: {
      original: req.body.valor.original,
    },
    chave: req.body.chave, // Informe sua chave Pix cadastrada na efipay.	
  }
  
  efipay.pixCreateImmediateCharge([], body)
    .then((response) => {
      console.log(response)
      return res.json(response)
    })
    .catch((error) => {
      console.log(error)
    })
}


module.exports = {
  pixCreateImmediateCharge
}