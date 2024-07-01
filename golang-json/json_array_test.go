package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestJSONArray(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
		Hobbies:    []string{"Reading", "Swimming"},
	}

	bytes, _ := json.Marshal(customer)

	fmt.Println(string(bytes))
}

func TestJSONArrayDecode(t *testing.T) {
	jsonString := `{
		"FirstName":"John",
		"MiddleName":"D",
		"LastName":"Doe",
		"Age":30,
		"Married":true,
		"Hobbies":["Reading","Swimming"],
		"Address": [
			{
				"Street": "Jl. Merdeka",
				"City": "Jakarta",
				"Country": "Indonesia"
			},
			{
				"Street": "Jl. Sudirman",
				"City": "Jakarta",
				"Country": "Indonesia"
			}	
		]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}

	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer) // result => &{John D Doe 30 true}
}

func TestJSONArrayComplex(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
		Hobbies:    []string{"Reading", "Swimming"},
		Address: []Address{
			{
				Street:  "Jl. Merdeka",
				City:    "Jakarta",
				Country: "Indonesia",
			},
			{
				Street:  "Jl. Sudirman",
				City:    "Jakarta",
				Country: "Indonesia",
			},
		},
	}

	bytes, _ := json.Marshal(customer)

	fmt.Println(string(bytes))
}

func TestJSONArrayComplexDecode(t *testing.T) {
	jsonString := `{"FirstName":"John","MiddleName":"D","LastName":"Doe","Age":30,"Married":true,"Hobbies":["Reading","Swimming"],"Address":[{"Street":"Jl. Merdeka","City":"Jakarta","Country":"Indonesia"},{"Street":"Jl. Sudirman","City":"Jakarta","Country":"Indonesia"}]}`
	jsonBytes := []byte(jsonString)

	customer := &Customer{}
	err := json.Unmarshal(jsonBytes, customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(customer)
}
