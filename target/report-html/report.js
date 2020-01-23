$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultaApi.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#/**"
    },
    {
      "line": 3,
      "value": "# * Autor: Hedan Diego"
    },
    {
      "line": 4,
      "value": "# * Data: 23/01/2019"
    },
    {
      "line": 5,
      "value": "# */"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 8,
      "value": "############################################################################################################"
    },
    {
      "line": 9,
      "value": "# Consulta Dados API"
    },
    {
      "line": 10,
      "value": "############################################################################################################"
    },
    {
      "line": 12,
      "value": "# * Caminho: https://jsonplaceholder.typicode.com/todos/1"
    },
    {
      "line": 13,
      "value": "# */"
    }
  ],
  "line": 15,
  "name": "Consulta API",
  "description": "Eu como cliente da aplicacao\nQuero consultar informacoes via requisicao\nPara validar o retorno",
  "id": "consulta-api",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Consulta com validacao de resultado",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que tenho informacoes cadastrada no banco dados",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "quando realizar a consulta",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "API de Consulta deve retornar todos estabelecimentos \u003ccodigo\u003e.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado;",
  "rows": [
    {
      "cells": [
        "codigo"
      ],
      "line": 26,
      "id": "consulta-api;consulta-com-validacao-de-resultado;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 27,
      "id": "consulta-api;consulta-com-validacao-de-resultado;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 27,
  "name": "Consulta com validacao de resultado",
  "description": "",
  "id": "consulta-api;consulta-com-validacao-de-resultado;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 21,
  "name": "que tenho informacoes cadastrada no banco dados",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "quando realizar a consulta",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "API de Consulta deve retornar todos estabelecimentos 200.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "ConsultaSteps.que_tenho_informacoes_cadastrada_no_banco_dados()"
});
formatter.result({
  "duration": 202879800,
  "status": "passed"
});
formatter.match({
  "location": "ConsultaSteps.quando_realizar_a_consulta()"
});
formatter.result({
  "duration": 4358232000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 53
    }
  ],
  "location": "ConsultaSteps.api_de_Consulta_deve_retornar_todos_estabelecimentos(int)"
});
formatter.result({
  "duration": 8398399,
  "error_message": "java.lang.AssertionError: Status Code diferente do esperado\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat br.com.hedan.actions.CommonActions.validarStatusCode(CommonActions.java:12)\r\n\tat br.com.hedan.features.steps.ConsultaSteps.api_de_Consulta_deve_retornar_todos_estabelecimentos(ConsultaSteps.java:34)\r\n\tat ✽.Entao API de Consulta deve retornar todos estabelecimentos 200.(ConsultaApi.feature:23)\r\n",
  "status": "failed"
});
});