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

func TestHttpRouter(t *testing.T) {
	router := httprouter.New()
	router.GET("/", func(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
		fmt.Fprint(w, "Hello Http Router")
	})

	request := httptest.NewRequest("GET", "http://localhost:8080/", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)

	// fmt.Println(string(bytes))
	assert.Equal(t, "Hello Http Router", string(bytes))
}
