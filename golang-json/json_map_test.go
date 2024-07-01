package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONMapDecode(t *testing.T) {
	jsonString := `{
		"id":"P001",
		"name":"Indomie",
		"price":2000,
		"image_url":"https://www.indomie.com"
	}`
	jsonBytes := []byte(jsonString)

	var result map[string]interface{}
	json.Unmarshal(jsonBytes, &result)

	fmt.Println(result["id"])
	fmt.Println(result["name"])
	fmt.Println(result["price"])
	fmt.Println(result["image_url"])
}

func TestJSONMapEncode(t *testing.T) {
	product := map[string]interface{}{
		"id":        "P001",
		"name":      "Indomie",
		"price":     2000,
		"image_url": "https://www.indomie.com",
	}

	bytes, _ := json.Marshal(product)

	fmt.Println(string(bytes))

	// result => {"id":"P001","name":"Indomie","price":2000,"image_url":"https://www.indomie.com"}
}
