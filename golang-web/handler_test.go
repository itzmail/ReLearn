package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

func TestHandler(t *testing.T) {
	var handler http.HandlerFunc = func(w http.ResponseWriter, r *http.Request) {
		fprintf, err := fmt.Fprintf(w, "Hello World")
		if err != nil {
			panic(err)
		}

		fmt.Println(fprintf)
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: handler,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

// ServeMux itu merupakan router yang digunakan untuk menentukan handler mana yang akan dipanggil
func TestMux(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		fprintf, err := fmt.Fprintf(writer, "Hello World")
		if err != nil {
			return
		}

		fmt.Println(fprintf)
	})

	mux.HandleFunc("/hi", func(writer http.ResponseWriter, request *http.Request) {
		fprintf, err := fmt.Fprintf(writer, "Hi World")
		if err != nil {
			return
		}

		fmt.Println(fprintf)
	})

	mux.HandleFunc("/bye", func(writer http.ResponseWriter, request *http.Request) {
		fprintf, err := fmt.Fprintf(writer, "Bye World")
		if err != nil {
			return
		}

		fmt.Println(fprintf)
	})

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}

func TestRequest(t *testing.T) {
	var handler http.HandlerFunc = func(writter http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writter, request.Method)
		fmt.Fprintln(writter, request.RequestURI)
	}

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: handler,
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
