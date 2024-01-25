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

func TestHandlerNotFound(t *testing.T) {
	router := httprouter.New()
	router.NotFound = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Halaman tidak ditemukan")
	})

	// router.GET("/", func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
	// 	panic("Something went wrong")
	// })

	request := httptest.NewRequest("GET", "http://localhost:3000/", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)

	// fmt.Println(string(bytes))
	assert.Equal(t, "Halaman tidak ditemukan", string(bytes))
}
