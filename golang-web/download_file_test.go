package golang_web

import (
	"fmt"
	"net/http"
	"testing"
)

func DownloadFile(writter http.ResponseWriter, request *http.Request) {
	file := request.URL.Query().Get("file")

	if file == "" {
		writter.WriteHeader(http.StatusBadRequest)
		fmt.Fprint(writter, "Bad Request"+file)
		return
	}

	writter.Header().Add("Content-Disposition", "attachment; filename:\""+file+"\"")
	http.ServeFile(writter, request, "./resources/"+file)
}

func TestDownloadFile(t *testing.T) {
	server := http.Server{
		Addr:    "localhost:8080",
		Handler: http.HandlerFunc(DownloadFile),
	}

	err := server.ListenAndServe()
	if err != nil {
		panic(err)
	}
}
