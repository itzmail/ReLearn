package golang_web

import (
	"fmt"
	"html/template"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

type MyPage struct {
	Name string
}

func (myPage MyPage) SayHello(name string) string {
	return "Hello " + name + ", My Name is " + myPage.Name
}

func TemplateFunction(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.New("FUNCTION").Parse(`{{ .SayHello "Ismail" }}`))

	t.ExecuteTemplate(writter, "FUNCTION", MyPage{
		Name: "Ismail",
	})
}

func TemplateFunctionGlobal(writter http.ResponseWriter, request *http.Request) {
	t := template.Must(template.New("FUNCTION").Parse(`{{ len .Name }}`))

	t.ExecuteTemplate(writter, "FUNCTION", MyPage{
		Name: "Ismail",
	})
}

func TemplateCreateGlobalFunction(writter http.ResponseWriter, request *http.Request) {
	t := template.New("FUNCTION")
	t = t.Funcs(map[string]interface{}{
		"upper": func(value string) string {
			return strings.ToUpper(value)
		},
	})

	t = template.Must(t.Parse(`{{ upper .Name }}`))
	t.ExecuteTemplate(writter, "FUNCTION", MyPage{
		Name: "Ismail nur alam",
	})
}

func TemplateCreateGlobalFunctionPipeLines(writter http.ResponseWriter, request *http.Request) {
	t := template.New("FUNCTION")
	t = t.Funcs(map[string]interface{}{
		"sayHello": func(value string) string {
			return "Hello " + value
		},
		"upper": func(value string) string {
			return strings.ToUpper(value)
		},
	})

	t = template.Must(t.Parse(`{{ sayHello .Name | upper }}`))
	t.ExecuteTemplate(writter, "FUNCTION", MyPage{
		Name: "Ismail nur alam",
	})
}

func TestTemplateFunction(t *testing.T) {
	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/", nil)
	response := httptest.NewRecorder()

	TemplateCreateGlobalFunctionPipeLines(response, request)

	body, _ := io.ReadAll(response.Body)

	fmt.Println(string(body))
}
