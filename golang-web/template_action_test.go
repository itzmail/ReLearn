package golang_web

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TemplateIf(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseFiles("./templates/if_template.gohtml"))

	t.ExecuteTemplate(writter, "if_template.gohtml", map[string]interface{}{
		"Name":       "Ismail Nur Alam",
		"FinalValue": 90,
	})
}

func TestTemplateIf(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	TemplateIf(record, request)

	body, _ := io.ReadAll(record.Result().Body)

	fmt.Println(string(body))
}
