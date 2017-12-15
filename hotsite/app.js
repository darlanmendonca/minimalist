require('../index.js') // main file of minimalist
require('../angular.js') // directives

angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.restrictions = [
    {
      nome: 'Site CVC - Nac VHI',
      restricoes: [
        {
          nome: 'Lorem',
          restricoes: [
            {
              nome: 'birl'
            },
            {
              nome: 'birl 2',
              restricoes: [
                {
                  nome: 'wow 1',
                  restricoes: [
                    {
                      nome: 'test 1',
                    },
                    {
                      nome: 'test 2',
                    },
                  ]
                }
              ],
            }
          ]
        }
      ],
    },
    {
      nome: 'Lero'
    }
  ]
  // this.restrictions = [
  //   {
  //     "nome": "SIte CVC - Nac VHI",
  //     "editavel": true,
  //     "idOrigem": 346,
  //     "versao": 8,
  //     "ativo": true,
  //     "id": 651,
  //     "configuracaoOrigem": false,
  //     "prioridade": 0,
  //     "idConfigEditavel": 651,
  //     "agrupaChamadaUnica": false,
  //     "nacInt": "NAC",
  //     "empresa": {
  //       "id": 41,
  //       "refencia": "WEB",
  //       "nome": "SITE CVC TURISMO",
  //       "perfil": "RESTRITO"
  //     },
  //     "statusPublicacao": "PUBLICADA",
  //     "acordosComerciais": [
  //       {
  //         "id": 6743,
  //         "credencial": {
  //           "id": 32,
  //           "nome": "Passaredo - Mercado CVC",
  //           "sistEmis": "CIONS",
  //           "usuario": "suporteaereo@cvc.com.br",
  //           "senha": "pass2012ws",
  //           "complemento": "2Z",
  //           "protocolo": "http",
  //           "host": "webservice.voepassaredo.com.br",
  //           "porta": "80",
  //           "caminho": "WSReservaWeb.asmx",
  //           "codigoEmpresa": "2Z",
  //           "ativo": true,
  //           "endpointUrl": "http://webservice.voepassaredo.com.br:80/WSReservaWeb.asmx",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "2z",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "PASSAREDO TRANSPORTES",
  //             "codigo": "2Z",
  //             "id": 24
  //           }
  //         ],
  //         "tipoAcordo": "ACCOUNT_CODE",
  //         "officeIdEmissao": "2z",
  //         "officeIdReserva": "2z",
  //         "nome": "Passaredo CVC OTA",
  //         "quebraChamadaPorPeriodo": false,
  //         "codigoContrato": {
  //           "id": 370,
  //           "descricao": "Passaredo - OTACVC",
  //           "codigo": "OTACVC",
  //           "ativo": true
  //         },
  //         "tipoTarifaAcordo": "AMBAS"
  //       },
  //       {
  //         "id": 6737,
  //         "credencial": {
  //           "id": 28,
  //           "nome": "AZUL - CVC - 57524401WS",
  //           "sistEmis": "AZUL",
  //           "usuario": "57524401WS",
  //           "senha": "05102017",
  //           "complemento": "EXT",
  //           "protocolo": "https",
  //           "host": "webservices.voeazul.com.br",
  //           "porta": "443",
  //           "caminho": "AzulWS/AzulServices.svc",
  //           "codigoEmpresa": "CVC",
  //           "ativo": true,
  //           "endpointUrl": "https://webservices.voeazul.com.br:443/AzulWS/AzulServices.svc",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "01200238",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "AZUL LINHAS AEREAS",
  //             "codigo": "AD",
  //             "id": 204
  //           }
  //         ],
  //         "tipoAcordo": "ACCOUNT_CODE",
  //         "officeIdEmissao": "01200238",
  //         "officeIdReserva": "01200238",
  //         "nome": "Azul Publica - Site CVC - OTA CVC2",
  //         "quebraChamadaPorPeriodo": false,
  //         "codigoContrato": {
  //           "id": 369,
  //           "descricao": "Azul - CVC OTA",
  //           "codigo": "CVC2",
  //           "identificador": "OTA",
  //           "ativo": true
  //         },
  //         "tipoTarifaAcordo": "PUBLICA"
  //       },
  //       {
  //         "id": 5416,
  //         "credencial": {
  //           "id": 30,
  //           "nome": "GOL - CVC - 2SPP001486",
  //           "sistEmis": "GOL",
  //           "usuario": "2SPP001486",
  //           "senha": "7458963251",
  //           "complemento": "WW2",
  //           "protocolo": "https",
  //           "host": "bws34.voegol.com.br",
  //           "porta": "443",
  //           "caminho": "BWS",
  //           "codigoEmpresa": "CVC",
  //           "ativo": true,
  //           "endpointUrl": "https://bws34.voegol.com.br:443/BWS",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "3SP0005141",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "GOL",
  //             "codigo": "G3",
  //             "id": 404
  //           }
  //         ],
  //         "tipoAcordo": "NENHUM",
  //         "officeIdEmissao": "3SP0005141",
  //         "officeIdReserva": "3SP0005141",
  //         "nome": "Site CVC - Publica Gol",
  //         "quebraChamadaPorPeriodo": false,
  //         "tipoTarifaAcordo": "AMBAS"
  //       },
  //       {
  //         "id": 5409,
  //         "credencial": {
  //           "id": 27,
  //           "nome": "AVIANCA (06) - CVC",
  //           "sistEmis": "AVIANCA",
  //           "usuario": "WSO6010372",
  //           "senha": "QU1BREVVUzE=",
  //           "complemento": "8",
  //           "protocolo": "https",
  //           "host": "nodeA1.production.webservices.amadeus.com",
  //           "porta": "443",
  //           "caminho": "O6-AIDL",
  //           "codigoEmpresa": "",
  //           "ativo": true,
  //           "endpointUrl": "https://nodeA1.production.webservices.amadeus.com:443/O6-AIDL",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "SAOO631MR",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "AVIANCA NACIONAL",
  //             "codigo": "O6",
  //             "id": 670
  //           }
  //         ],
  //         "tipoAcordo": "NENHUM",
  //         "incentivo": 0.0000,
  //         "officeIdEmissao": "SAOO631MR",
  //         "officeIdReserva": "SAOO631MR",
  //         "nome": "Site CVC Avianca (O6) - Publica",
  //         "comissao": 0.0000,
  //         "quebraChamadaPorPeriodo": false,
  //         "tipoTarifaAcordo": "AMBAS"
  //       },
  //       {
  //         "id": 5433,
  //         "credencial": {
  //           "id": 32,
  //           "nome": "Passaredo - Mercado CVC",
  //           "sistEmis": "CIONS",
  //           "usuario": "suporteaereo@cvc.com.br",
  //           "senha": "pass2012ws",
  //           "complemento": "2Z",
  //           "protocolo": "http",
  //           "host": "webservice.voepassaredo.com.br",
  //           "porta": "80",
  //           "caminho": "WSReservaWeb.asmx",
  //           "codigoEmpresa": "2Z",
  //           "ativo": true,
  //           "endpointUrl": "http://webservice.voepassaredo.com.br:80/WSReservaWeb.asmx",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "2z",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "PASSAREDO TRANSPORTES",
  //             "codigo": "2Z",
  //             "id": 24
  //           }
  //         ],
  //         "tipoAcordo": "NENHUM",
  //         "officeIdEmissao": "2z",
  //         "officeIdReserva": "2z",
  //         "nome": "Passaredo CVC PU",
  //         "quebraChamadaPorPeriodo": false,
  //         "codigoContrato": {
  //           "id": 27,
  //           "descricao": "Passaredo - RCVC07",
  //           "codigo": "RCVC07",
  //           "ativo": true
  //         },
  //         "tipoTarifaAcordo": "AMBAS"
  //       },
  //       {
  //         "id": 5461,
  //         "credencial": {
  //           "id": 29,
  //           "nome": "CVC - TAM",
  //           "sistEmis": "TAM",
  //           "usuario": "WJJ2127005",
  //           "senha": "REEzRlFHTkg=",
  //           "complemento": "UxUB67",
  //           "protocolo": "https",
  //           "host": "production.webservices.TAM.amadeus.com",
  //           "porta": "443",
  //           "caminho": "elews/services/EWSWebService",
  //           "codigoEmpresa": "B2T-JJ2",
  //           "ativo": true,
  //           "endpointUrl": "https://production.webservices.TAM.amadeus.com:443/elews/services/EWSWebService",
  //           "valid": true
  //         },
  //         "ativo": true,
  //         "officeIdBusca": "QSBJJ2124",
  //         "empresa": {
  //           "id": 41
  //         },
  //         "ciasAereas": [
  //           {
  //             "ativo": true,
  //             "nome": "TAM",
  //             "codigo": "JJ",
  //             "id": 514
  //           }
  //         ],
  //         "tipoAcordo": "NENHUM",
  //         "incentivo": 0.0000,
  //         "officeIdEmissao": "QSBJJ2124",
  //         "officeIdReserva": "QSBJJ2124",
  //         "nome": "CVC (JJ) Mercado - Nacional",
  //         "comissao": 0.0000,
  //         "quebraChamadaPorPeriodo": false,
  //         "codigoContrato": {
  //           "id": 9,
  //           "descricao": "TAM - 155392",
  //           "codigo": "155392",
  //           "ativo": true
  //         },
  //         "tipoTarifaAcordo": "AMBAS"
  //       }
  //     ],
  //     "filiais": [],
  //     "produtos": [
  //       {
  //         "id": 4,
  //         "nome": "VHI",
  //         "descricao": "VHI",
  //         "ativo": true
  //       }
  //     ],
  //     "ciasExcluidas": [],
  //     "restricoes": [
  //       {
  //         "id": null,
  //         "restricaoMaeId": null,
  //         "nome": 'LOREM',
  //         "valor": "OR",
  //         "tipoOperador": "DIFERENTE",
  //         "tipoRestricao": {
  //           "tipo": "Tipo de Tarifa",
  //           "campo": "agrupamento",
  //           "periodo": false
  //         },
  //         "tipoAgrupamento": "OR",
  //         "restricoes": [
  //           {
  //             "id": null,
  //             "restricaoMaeId": null,
  //             "nome": 'SIte CVC - Nac VHI',
  //             "valor": "OR",
  //             "tipoOperador": "TOP",
  //             "tipoRestricao": {
  //               "tipo": "Tipo de Tarifa",
  //               "campo": "sei la",
  //               "periodo": false
  //             },
  //             "tipoAgrupamento": "OR",
  //             "restricoes": [{
  //               "id": null,
  //               "restricaoMaeId": null,
  //               "nome": 'SIte CVC - Nac VHI',
  //               "valor": "OR",
  //               "tipoOperador": "MAUYR",
  //               "tipoRestricao": {
  //                 "tipo": "Tipo de Tarifa",
  //                 "campo": "sei la",
  //                 "periodo": false
  //               },
  //               "tipoAgrupamento": "OR",
  //               "restricoes": [],
  //               "valores": [
  //                 {
  //                   "nome": "PUBLICA",
  //                   "valor": "PU"
  //                 }
  //               ]
  //             },
  //             {
  //               "id": null,
  //               "restricaoMaeId": null,
  //               "nome": 'SIte CVC - Nac VHI',
  //               "valor": "OR",
  //               "tipoOperador": "VAI",
  //               "tipoRestricao": {
  //                 "tipo": "Tipo de Tarifa",
  //                 "campo": "sei la",
  //                 "periodo": false
  //               },
  //               "tipoAgrupamento": "OR",
  //               "restricoes": [],
  //               "valores": [
  //                 {
  //                   "nome": "PUBLICA",
  //                   "valor": "PU"
  //                 }
  //               ]
  //             }],
  //             "valores": [
  //               {
  //                 "nome": "PUBLICA",
  //                 "valor": "PU"
  //               }
  //             ]
  //           }
  //         ],
  //         "valores": [
  //           {
  //             "nome": "PUBLICA",
  //             "valor": "PU"
  //           }
  //         ]
  //       },
  //       {
  //         "id": null,
  //         "restricaoMaeId": null,
  //         "nome": 'lero 1',
  //         "valor": "OR",
  //         "tipoOperador": "IGUAL",
  //         "tipoRestricao": {
  //           "tipo": "Pais Origem",
  //           "campo": "autocompletar",
  //           "periodo": false
  //         },
  //         "tipoAgrupamento": "OR",
  //         "restricoes": [],
  //         "valores": [
  //           {
  //             "nome": "US",
  //             "valor": "US"
  //           },
  //           {
  //             "nome": "ES",
  //             "valor": "ES"
  //           },
  //           {
  //             "nome": "BR",
  //             "valor": "BR"
  //           }
  //         ]
  //       },
  //       {
  //         "id": null,
  //         "restricaoMaeId": null,
  //         "nome": 'lero 2',
  //         "valor": "OR",
  //         "tipoOperador": "MAIOR_IGUAL",
  //         "tipoRestricao": {
  //           "tipo": "Online",
  //           "campo": "numerico",
  //           "periodo": false
  //         },
  //         "tipoAgrupamento": "OR",
  //         "restricoes": [],
  //         "valores": [
  //           {
  //             "nome": "50",
  //             "valor": "50"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //         "id": null,
  //         "restricaoMaeId": null,
  //         "nome": 'Wow',
  //         "valor": "OR",
  //         "tipoOperador": "DIFERENTE",
  //         "tipoRestricao": {
  //           "tipo": "Tipo de Tarifa",
  //           "campo": "agrupamento",
  //           "periodo": false
  //         },
  //         "tipoAgrupamento": "OR",
  //         "valores": [
  //           {
  //             "nome": "PUBLICA",
  //             "valor": "PU"
  //           }
  //         ]
  //   },
  // ]
  // this.houses = ['stark', 'lannister', 'targaryen']
  this.list = ['lorem 1', 'lorem 2', 'lorem 3']
  this.list2 = ['stark', 'lannister', 'targaryen']
  // this.houses = 'stark'
  this.number = 10
  this.numbers = [10, 20, 30, .5]
}

angular
  .module('app')
  .filter('key', KeyFilterDirective)

function KeyFilterDirective() {
  return filter

  function filter(array, key) {
    // console.log(array)
    return array.map(item => item[key])
  }
}
