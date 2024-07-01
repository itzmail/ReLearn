package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONTag(t *testing.T) {
	product := Product{
		Id:       "P001",
		Name:     "Indomie",
		Price:    2000,
		ImageUrl: "https://www.indomie.com",
	}

	bytes, _ := json.Marshal(product)

	fmt.Println(string(bytes))
	// result => {"id":"P001","name":"Indomie","price":2000,"image_url":"https://www.indomie.com"}
}

func TestJSONTagDecode(t *testing.T) {
	jsonString := `{
	"id":"P001",
	"name":"Indomie",
	"price":2000,
	"image_url":"https://www.indomie.com"
	}`
	jsonBytes := []byte(jsonString)

	product := &Product{}

	err := json.Unmarshal(jsonBytes, product)

	if err != nil {
		panic(err)
	}

	fmt.Println(product)
	// result => &{P001 Indomie 2000 https://www.indomie.com}
}
