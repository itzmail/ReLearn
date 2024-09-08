package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	hackernews "github.com/itzmail/hackernews/graph"
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
	srv := handler.NewDefaultServer(hackernews.NewExecutableSchema(hackernews.Config{Resolvers: &hackernews.Resolver{}}))
	/*
	 * Membuat server GraphQL menggunakan NewDefaultServer dari package handler.
	 * NewExecutableSchema digunakan untuk membuat skema eksekusi GraphQL dengan konfigurasi yang diberikan, termasuk resolver.
	 */

	// Middleware untuk memeriksa jenis operasi
	/* checkOperationType := func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			if r.Method == http.MethodPost {
				buf := new(strings.Builder)
				_, err := io.Copy(buf, r.Body)
				if err != nil {
					http.Error(w, "Invalid request body", http.StatusBadRequest)
					return
				}
				body := buf.String()
				if strings.Contains(body, "mutation") {
					http.Redirect(w, r, "/mutation", http.StatusTemporaryRedirect)
					return
				}
			}
			next.ServeHTTP(w, r)
		})
	} */

	// Membuat endpoint GraphQL playground
	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)
	router.Handle("/mutation", srv)

	http.Handle("/", router)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
