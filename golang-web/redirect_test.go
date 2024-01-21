package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

func RedirectTo(writter http.ResponseWriter, request *http.Request) {
	fmt.Fprint(writter, "Hello Redirect")
}

func RedirectFrom(writter http.ResponseWriter, request *http.Request) {
	// logic
	http.Redirect(writter, request, "/redirect-to", http.StatusTemporaryRedirect)
}

func RedirectOut(writter http.ResponseWriter, request *http.Request) {
	http.Redirect(writter, request, "https://itzmail.github.io", http.StatusPermanentRedirect)
}

func TestRedirect(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/redirect-from", RedirectFrom)
	mux.HandleFunc("/redirect-to", RedirectTo)
	mux.HandleFunc("/redirect-out", RedirectOut)

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
