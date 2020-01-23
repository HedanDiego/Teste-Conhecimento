package br.com.hedan.actions;

import io.restassured.response.Response;
import static org.junit.Assert.fail;

public class CommonActions {
	
	public static void validarStatusCode(Response resposta, int statusDesejado) {
		if (resposta.getStatusCode() == statusDesejado) {
			System.out.println("Status code correto");
		} else {
			fail("Status Code diferente do esperado");
			System.out.println(resposta.getStatusCode());
			System.out.println(statusDesejado);
		}
	}

}
