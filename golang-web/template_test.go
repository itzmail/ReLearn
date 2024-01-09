package golang_web

import (
	"embed"
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func SimpleHTML(writter http.ResponseWriter, req *http.Request) {
	templateText := `<html><body>{{.}}</body></html>`
	//t, err := template.New("JOS").Parse(templateText)
	//if err != nil {
	//	panic(err)
	//}
	t := template.Must(template.New("JOS").Parse(templateText)) // error sudah dihandle oleh Must
	t.ExecuteTemplate(writter, "JOS", "Hello HTML Template")
}

func TestSimpleHTML(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	recorder := httptest.NewRecorder()

	SimpleHTML(recorder, request)

	response := recorder.Result()

	body, err := io.ReadAll(response.Body)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(body))
}

// template use file
func SimpleHTMLFile(writter http.ResponseWriter, req *http.Request) {
	t := template.Must(template.ParseFiles("./templates/simple.gohtml"))
	t.ExecuteTemplate(writter, "simple.gohtml", "Hello HTML Template, welcome back!")
}

func TestSimpleHTMLFile(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	recorder := httptest.NewRecorder()

	SimpleHTMLFile(recorder, request)

	body, _ := io.ReadAll(recorder.Body)
	fmt.Println(string(body))
}

func TemplateDirectory(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseGlob("./templates/*.gohtml"))
	t.ExecuteTemplate(writter, "simple.gohtml", "Template Directory")
}

func TestTemplateDirectory(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	recorder := httptest.NewRecorder()

	TemplateDirectory(recorder, request)

	body, _ := io.ReadAll(recorder.Body)
	fmt.Println(string(body))
}

//go:embed templates/*.gohtml
var templateFs embed.FS

func TemplateEmbed(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseFS(templateFs, "templates/*.gohtml"))
	t.ExecuteTemplate(writter, "simple.gohtml", "Jos Gandos")
}

func TestTemplateEmbed(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	recorder := httptest.NewRecorder()

	TemplateEmbed(recorder, request)

	body, _ := io.ReadAll(recorder.Body)
	fmt.Println(string(body))
}
