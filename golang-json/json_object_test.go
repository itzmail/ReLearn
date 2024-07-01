package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

type Customer struct {
	FirstName  string
	MiddleName string
	LastName   string
	Age        int
	Married    bool
	Hobbies    []string
	Address    []Address
}

type Address struct {
	Street  string
	City    string
	Country string
}

type Product struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Price    int    `json:"price"`
	ImageUrl string `json:"image_url"`
}

func TestJSONObject(t *testing.T) {
	customer := Customer{
		FirstName:  "John",
		MiddleName: "D",
		LastName:   "Doe",
		Age:        30,
		Married:    true,
	}

	bytes, err := json.Marshal(customer)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(bytes)) // result => {"FirstName":"John","MiddleName":"D","LastName":"Doe"}
}
