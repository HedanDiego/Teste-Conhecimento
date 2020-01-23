#language: pt
#/**
# * Autor: Hedan Diego
# * Data: 23/01/2019
# */
#

  ############################################################################################################
  # Consulta Dados API
  ############################################################################################################
  
# * Caminho: https://jsonplaceholder.typicode.com/todos/1
# */

Funcionalidade: Consulta API
  Eu como cliente da aplicacao
  Quero consultar informacoes via requisicao
  Para validar o retorno

  Esquema do Cenario: Consulta com validacao de resultado
    Dado que tenho informacoes cadastrada no banco dados
    Quando quando realizar a consulta
    Entao API de Consulta deve retornar todos estabelecimentos <codigo>.
    
    Exemplos:
    | codigo |
    | 200 |