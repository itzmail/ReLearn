package golang_web

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TemplateLayout(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseFiles("./templates/layouts/header.gohtml", "./templates/layouts/footer.gohtml", "./templates/layouts/layout_template.gohtml"))

	t.ExecuteTemplate(writter, "layout_template.gohtml", map[string]interface{}{
		"Name":   "Ismail",
		"Title":  "Personal Website",
		"Footer": "Copyright",
	})
}

func TestTemplateLayout(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	TemplateLayout(record, request)

	body, _ := io.ReadAll(record.Body)

	fmt.Println(string(body))
}
