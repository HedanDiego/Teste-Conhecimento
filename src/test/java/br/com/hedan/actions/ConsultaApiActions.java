package br.com.hedan.actions;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.RestAssured.given;

public class ConsultaApiActions {
	
		public static Response consultaApi() {
						
			RestAssured.baseURI = "https://jsonplaceholder.typicode.com";

			Response response = 
					given()
						.log().all()
						.contentType("application/json")
					.when()
						.get("/todos/1")
					.then()
						.log().all()
						.extract()
						.response();
			
			return response;
		}
}
