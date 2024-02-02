package golang_web

import (
	_ "embed"
	"fmt"
	"net/http"
	"testing"
)

func ServeFile(writter http.ResponseWriter, request *http.Request) {
	name := request.URL.Query().Get("name")

	if name != "" {
		http.ServeFile(writter, request, "./resources/ok.html")
	} else {
		http.ServeFile(writter, request, "./resources/notfound.html")
	}
}

//go:embed resources/ok.html
var resouceOk string

//go:embed resources/notfound.html
var resouceNotFound string

func ServeFileEmbed(writter http.ResponseWriter, request *http.Request) {
	name := request.URL.Query().Get("name")

	if name != "" {
		//http.ServeFile(writter, request, "./resources/ok.html")
		fmt.Fprint(writter, resouceOk)
	} else {
		//http.ServeFile(writter, request, "./resources/notfound.html")
		fmt.Fprint(writter, resouceNotFound)
	}
}

func TestServerFileServer(t *testing.T) {
	server := http.Server{
		Addr:    "localhost:8080",
		Handler: http.HandlerFunc(ServeFileEmbed),
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
