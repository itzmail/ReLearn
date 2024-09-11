package com.learn.graphql;

 import java.util.Collection;
import java.util.List;
import java.util.function.UnaryOperator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.graphql.execution.RuntimeWiringConfigurer;
import org.springframework.stereotype.Service;

import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.TypeRuntimeWiring;

@SpringBootApplication
public class GraphqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(GraphqlApplication.class, args);
	}

	@Bean
	RuntimeWiringConfigurer runtimeWiringConfigurer() {
		return new RuntimeWiringConfigurer() {
			@Override
			public void configure(RuntimeWiring.Builder builder) {
				builder.type("Query", new UnaryOperator<TypeRuntimeWiring.Builder>() {
					@Override
					public TypeRuntimeWiring.Builder apply(TypeRuntimeWiring.Builder wiring) {
						return wiring
								.dataFetcher("customers", new DataFetcher<>() {
									@Override
									public Object get(DataFetchingEnvironment environemnt) throws Exception {
										return null;
									}
								});
					}
				});
			}
		};
	}
}

record Customer (Integer id, String name) {}
@Service
class CrmService {
	Collection <Customer> getCustomers() {
		 return List.of(
			new Customer(1, "Jhond"),
			new Customer(2, "Doe")
		 );
	}
}
