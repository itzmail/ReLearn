package golang_web

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TemplateRange(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseFiles("./templates/loop_template.gohtml"))

	t.ExecuteTemplate(writter, "loop_template.gohtml", map[string]interface{}{
		"Name": "Ismail",
		"Address": map[string]interface{}{
			"Street": "Jalan Mantap Jiwa",
			"Number": 23,
		},
		"Hobbies": []string{
			"Gaming", "Reading", "Coding",
		},
	})
}

func TestTemplateRange(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	TemplateRange(record, request)

	body, _ := io.ReadAll(record.Body)

	fmt.Println(string(body))
}
