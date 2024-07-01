package golangjson

import (
	"encoding/json"
	"fmt"
	"testing"
)

func logJson(data interface{}) {
	bytes, err := json.Marshal(data)

	if err != nil {
		panic(err)
	}

	fmt.Println(string(bytes))
}

func TestEncode(t *testing.T) {
	logJson("Hello, World!")            // result => "Hello, World!"
	logJson(1)                          // result => 1
	logJson(true)                       // result => true
	logJson([]string{"Hello", "World"}) // result => ["Hello", "World"]
}
