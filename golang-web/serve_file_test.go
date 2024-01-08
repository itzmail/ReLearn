package golang_web

import (
	_ "embed"
	"fmt"
	"net/http"
	"testing"
)

func ServeFile(writter http.ResponseWriter, request *http.Request) {
	if request.URL.Query().Get("name") != "" {
		http.ServeFile(writter, request, "./resources/ok.html")
	} else {
		http.ServeFile(writter, request, "./resources/notfound.html")
	}
}

func TestServeFileServer(t *testing.T) {
	server := http.Server{
		Addr:    "localhost:8080",
		Handler: http.HandlerFunc(ServeFile),
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

//go:embed resources/ok.html
var resoucesOk string

//go:embed resources/notfound.html
var resourceNotFound string

func ServeFileEmbed(writter http.ResponseWriter, request *http.Request) {
	if request.URL.Query().Get("name") != "" {
		fmt.Fprint(writter, resoucesOk)
	} else {
		fmt.Fprint(writter, resourceNotFound)
	}
}

func TestServeFileEmbed(t *testing.T) {
	server := http.Server{
		Addr:    "localhost:8080",
		Handler: http.HandlerFunc(ServeFileEmbed),
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
