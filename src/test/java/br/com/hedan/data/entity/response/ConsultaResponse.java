package br.com.hedan.data.entity.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsultaResponse {

	@JsonProperty(value = "userId")
	private Integer userId;
	@JsonProperty(value = "id")
	private Integer id;
	@JsonProperty(value = "title")
	private String title;
	@JsonProperty(value = "completed")
	private Boolean completed;
	

	@JsonProperty("userId")
	public Integer getUserId() {
	return userId;
	}

	@JsonProperty("userId")
	public void setUserId(Integer userId) {
	this.userId = userId;
	}

	@JsonProperty("id")
	public Integer getId() {
	return id;
	}

	@JsonProperty("id")
	public void setId(Integer id) {
	this.id = id;
	}

	@JsonProperty("title")
	public String getTitle() {
	return title;
	}

	@JsonProperty("title")
	public void setTitle(String title) {
	this.title = title;
	}

	@JsonProperty("completed")
	public Boolean getCompleted() {
	return completed;
	}

	@JsonProperty("completed")
	public void setCompleted(Boolean completed) {
	this.completed = completed;
	}
}
