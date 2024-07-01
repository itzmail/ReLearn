package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestDecodeJSON(t *testing.T) {
	jsonString := `{"FirstName":"John","MiddleName":"D","LastName":"Doe","Age":30,"Married":true}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}
	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer)            // result => &{John D Doe 30 true}
	fmt.Println(customer.FirstName)  // result => John
	fmt.Println(customer.MiddleName) // result => D
	fmt.Println(customer.LastName)   // result => Doe
	fmt.Println(customer.Age)        // result => 30
	fmt.Println(customer.Married)    // result => true
}
