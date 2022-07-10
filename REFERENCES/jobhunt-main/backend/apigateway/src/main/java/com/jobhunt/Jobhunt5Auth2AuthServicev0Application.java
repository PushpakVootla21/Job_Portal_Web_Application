package com.jobhunt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableEurekaClient

@SpringBootApplication
public class Jobhunt5Auth2AuthServicev0Application {

	public static void main(String[] args) {
		SpringApplication.run(Jobhunt5Auth2AuthServicev0Application.class, args);
	}

}
