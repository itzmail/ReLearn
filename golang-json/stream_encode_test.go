package golangjson

import (
	"encoding/json"
	"os"
	"testing"
)

func TestJsonEncoder(t *testing.T) {
	writter, _ := os.Create("CustomerOut.json")
	encoder := json.NewEncoder(writter)

	customer := &Customer{
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

	encoder.Encode(customer)
}
