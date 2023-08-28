package helper

import "testing"

func TestHelloWorld(t *testing.T) string {
	result := HelloWorld("Ismail")

	if result != "Hello Ismail" {
		panic("Result is not 'Hello Ismail'")
	}
}
