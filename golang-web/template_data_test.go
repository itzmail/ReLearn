package golang_web

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TemplateData(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.ParseFiles("./templates/name.gohtml"))
	err := t.ExecuteTemplate(writter, "name.gohtml", map[string]interface{}{
		"Title": "Template Data Map",
		"Name":  "Ismail",
	})
	if err != nil {
		return
	}
}

func TestTemplate(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080", nil)
	record := httptest.NewRecorder()

	TemplateData(record, request)

	body, _ := io.ReadAll(record.Result().Body)
	fmt.Println(string(body))
}

type Address struct {
	Street string
}

type Person struct {
	Name    string
	Title   string
	Address Address
}

func TemplateDataStrutch(writter http.ResponseWriter, requst *http.Request) {
	t := template.Must(template.ParseGlob("./templates/*.gohtml"))
	err := t.ExecuteTemplate(writter, "name.gohtml", Person{
		Name:    "Ismail",
		Title:   "Template Strutch",
		Address: Address{Street: "Jalan belum ada"},
	})

	if err != nil {
		panic(err)
	}
}

func TestTemplateDataStrutch(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	TemplateDataStrutch(record, request)

	body, _ := io.ReadAll(record.Result().Body)
	fmt.Println(string(body))
}
