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

func TestRouteParams(t *testing.T) {
	router := httprouter.New()
	router.GET("/product/:id", func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		id := params.ByName("id")
		fmt.Fprint(w, "Product id is ", id)
	})

	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/product/1", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)

	// fmt.Println(string(bytes))
	assert.Equal(t, "Product id is 1", string(bytes))
}

func TestRouteParams2(t *testing.T) {
	router := httprouter.New()
	router.GET("/product/:id/item/:itemId", func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		id := params.ByName("id")
		itemId := params.ByName("itemId")
		fmt.Fprintf(w, "Product id is %s and item id is %s", id, itemId)
	})

	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/product/1/item/2", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)
	// fmt.Println(string(bytes))
	assert.Equal(t, "Product id is 1 and item id is 2", string(bytes))
}

func TestRouteCatchAllParams(t *testing.T) {
	router := httprouter.New()
	router.GET("/images/*imagePath", func(w http.ResponseWriter, r *http.Request, params httprouter.Params) {
		imagePath := params.ByName("imagePath")
		fmt.Fprintf(w, "Image path is %s", imagePath)
	})

	request := httptest.NewRequest(http.MethodGet, "http://localhost:8080/images/small/profile.png", nil)
	record := httptest.NewRecorder()

	router.ServeHTTP(record, request)
	response := record.Result()

	bytes, _ := io.ReadAll(response.Body)
	// fmt.Println(string(bytes))
	assert.Equal(t, "Image path is /small/profile.png", string(bytes))
}
