package br.com.hedan.features.steps;

import static org.junit.Assert.*;

import br.com.hedan.actions.CommonActions;
import br.com.hedan.actions.ConsultaApiActions;
import br.com.hedan.data.entity.response.ConsultaResponse;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import io.restassured.response.Response;

public class ConsultaSteps {
	
	ConsultaApiActions consultaApi = new ConsultaApiActions();
	ConsultaResponse retorno_consulta = new ConsultaResponse();
	Response retornoApi;
	
	@Dado("^que tenho informacoes cadastrada no banco dados$")
	public void que_tenho_informacoes_cadastrada_no_banco_dados() throws Throwable {

	}

	@Quando("^quando realizar a consulta$")
	public void quando_realizar_a_consulta() throws Throwable {
	
		retornoApi = ConsultaApiActions.consultaApi();
	}

	@Entao("^API de Consulta deve retornar todos estabelecimentos (\\d+)\\.$")
	public void api_de_Consulta_deve_retornar_todos_estabelecimentos(int codigo) throws Throwable {
		
		//COM SERIALIZAÇÃO
		CommonActions.validarStatusCode(retornoApi, 201);
		retorno_consulta = retornoApi.as(ConsultaResponse.class);
		assertEquals("1", retorno_consulta.getUserId().toString());
		assertEquals("1", retorno_consulta.getId().toString());
		assertEquals("delectus aut autem", retorno_consulta.getTitle());
		assertEquals("false", retorno_consulta.getCompleted().toString(false));
		assertEquals(codigo , retornoApi.getStatusCode());
		
				
				
		//SEM SERIALIZAÇÃO
		String userId = retornoApi.then().extract().path("userId").toString();
		String id = retornoApi.then().extract().path("id").toString();
		String title = retornoApi.then().extract().path("title").toString();
		String completed = retornoApi.then().extract().path("completed").toString();
		
		retornoApi.then().statusCode(200);
		assertEquals("1", userId);
		assertEquals("1", id);
		assertEquals("delectus aut autem", title);
		assertEquals("false", completed);
	
	}

}
