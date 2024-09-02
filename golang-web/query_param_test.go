package golang_web

import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func SingleParam(writter http.ResponseWriter, request *http.Request, keyParam string) {
	name := request.URL.Query().Get(keyParam)

	if name == "" {
		fmt.Fprint(writter, "Hello")
	} else {
		fmt.Fprintf(writter, "Hello %s", name)
	}
}

func TestSingleQueryParams(t *testing.T) {
	param := "name"
	url := "http://localhost:8080/hello?" + param + "=Ismail"

	request := httptest.NewRequest(http.MethodGet, url, nil)
	recorder := httptest.NewRecorder()

	SingleParam(recorder, request, param)

	response := recorder.Result()
	body, _ := io.ReadAll(response.Body)

	bodyString := string(body)

	fmt.Println(bodyString)
}

func MultipleParams(writter http.ResponseWriter, request *http.Request, keyParam []string) {
	firstName := request.URL.Query().Get(keyParam[0])
	lastName := request.URL.Query().Get(keyParam[1])

	fmt.Fprintf(writter, "Hello %s %s", firstName, lastName)
}

func TestMultipleQueryParams(t *testing.T) {
	param := []string{"first_name", "last_name"}
	url := "http://localhost:8080/hello?" + param[0] + "=Ismail&" + param[1] + "=Muhammad"

	request := httptest.NewRequest(http.MethodGet, url, nil)
	recorder := httptest.NewRecorder()

	MultipleParams(recorder, request, param)

	response := recorder.Result()
	body, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	bodyString := string(body)
	fmt.Println(bodyString)
}

func MultipleParamsMap(writter http.ResponseWriter, request *http.Request) {
	query := request.URL.Query()
	name := query["name"]

	data := strings.Join(name, " ")

	fmt.Fprint(writter, data)
	//for _, value := range keyParam {
	//	fmt.Fprintf(writter, "Hello %s %s\n", value, query.Get(value))
	//}
}

func TestMultipleQueryParamsMap(t *testing.T) {
	url := "http://localhost:8080/hello?name=Ismail&name=Muhammad&name=Ghifari&val=123&val=456"

	request := httptest.NewRequest(http.MethodGet, url, nil)
	recorder := httptest.NewRecorder()

	MultipleParamsMap(recorder, request)

	response := recorder.Result()
	body, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	bodyString := string(body)
	fmt.Println(bodyString)
}
