package golang_web

import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func RequestHeader(writter http.ResponseWriter, request *http.Request) {
	contentType := request.Header.Get("content-type")
	fmt.Fprint(writter, contentType)
}

func TestRequestHeader(t *testing.T) {
	request := httptest.NewRequest(http.MethodPost, "http://localhost:8080/", nil)
	request.Header.Add("Content-Type", "appplication/json")

	recorder := httptest.NewRecorder()

	RequestHeader(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
}

func ResponseHeader(writter http.ResponseWriter, request *http.Request) {
	writter.Header().Add("X-Powered-By", "programmer zaman now")
	fprint, err := fmt.Fprint(writter, "Hello")
	if err != nil {
		return
	}

	fmt.Println(fprint)
}

func TestResponseHeader(t *testing.T) {
	request := httptest.NewRequest(http.MethodPost, "http://localhost:8080/", nil)
	request.Header.Add("content-type", "application/json")

	recorder := httptest.NewRecorder()

	ResponseHeader(recorder, request)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
	fmt.Println(response.Header.Get("x-powered-by"))
}
