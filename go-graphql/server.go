package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/itzmail/hackernews/graph"
	"github.com/itzmail/hackernews/internal/auth"
	database "github.com/itzmail/hackernews/internal/pkg/db/mysql"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	router := chi.NewRouter()

	router.Use(auth.Middleware())

	database.InitDB()
	defer database.CloseDB()
	database.Migrate()
	// Membuat server GraphQL
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))
	/*
	 * Membuat server GraphQL menggunakan NewDefaultServer dari package handler.
	 * NewExecutableSchema digunakan untuk membuat skema eksekusi GraphQL dengan konfigurasi yang diberikan, termasuk resolver.
	 */

	// Membuat endpoint GraphQL playground
	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
