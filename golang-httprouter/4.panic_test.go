package main

import (
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/julienschmidt/httprouter"
	"github.com/stretchr/testify/assert"
)

func TestPanicHandler(t *testing.T) {
	router := httprouter.New()
	router.PanicHandler = func(w http.ResponseWriter, r *http.Request, err interface{}) {
		// text := "Panic: " + err.(error).Error()
		fmt.Fprint(w, "Panic: ", err)
	}

	router.GET("/", func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		panic("Something went wrong")
	})

	request := httptest.NewRequest("GET", "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)

	// fmt.Println(string(bytes))
	assert.Equal(t, "Panic: Something went wrong", string(bytes))
}
