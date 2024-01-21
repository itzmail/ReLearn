package golang_web

import (
	"bytes"
	_ "embed"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"
)

func UploadForm(writter http.ResponseWriter, request *http.Request) {
	myTemplates.ExecuteTemplate(writter, "upload.form.gohtml", map[string]interface{}{
		"Title": "Upload Form",
	})
}

func Upload(writter http.ResponseWriter, request *http.Request) {
	file, fileHeader, err := request.FormFile("file_custom") // default size file 32 << 20 mean it 32 mb
	if err != nil {
		panic(err)
	}

	fileDestination, err := os.Create("./resources/" + fileHeader.Filename)
	if err != nil {
		panic(err)
	}

	_, err = io.Copy(fileDestination, file)
	if err != nil {
		panic(err)
	}

	name := request.PostFormValue("name")

	err = myTemplates.ExecuteTemplate(writter, "upload.success.gohtml", map[string]interface{}{
		"Title": "Upload Succes",
		"File":  "/static/" + fileHeader.Filename,
		"Name":  name,
	})
	if err != nil {
		return
	}
}

func TestUploadForm(t *testing.T) {
	mux := http.NewServeMux()
	mux.HandleFunc("/form", UploadForm)
	mux.HandleFunc("/upload", Upload)
	mux.Handle("/static/", http.StripPrefix("/static", http.FileServer(http.Dir("./resources"))))

	server := http.Server{
		Addr:    "localhost:8080",
		Handler: mux,
	}

	err := server.ListenAndServe()

	if err != nil {
		panic(err)
	}
}

// make unit test

//go:embed resources/man-universe.png
var uploadFileTest []byte

func TestUploadFile(t *testing.T) {
	body := new(bytes.Buffer)

	writter := multipart.NewWriter(body)
	err := writter.WriteField("name", "Eko Kurniawan Khannedy")
	if err != nil {
		return
	}
	file, _ := writter.CreateFormFile("file_custom", "CONTOHUPLOAD.png")
	_, err = file.Write(uploadFileTest)
	if err != nil {
		return
	}
	writter.Close()

	request := httptest.NewRequest(http.MethodPost, "http://localhost:8080/upload", body)
	request.Header.Set("Content-Type", writter.FormDataContentType())
	record := httptest.NewRecorder()

	Upload(record, request)

	bodyResponse, _ := io.ReadAll(record.Result().Body)
	fmt.Println(string(bodyResponse))
}
