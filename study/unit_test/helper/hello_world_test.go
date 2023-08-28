package helper

import (
	"fmt"
	"testing"
)

func TestHelloWorld(t *testing.T) {
	result := HelloWorld("Ismail")

	if result != "Hello Ismail" {
		t.Error("Result must be 'Hello Ismail'")
	}

	fmt.Println("Eksekusi TestHellowWorld done")
}

func TestHelloWorldMail(t *testing.T) {
	result := HelloWorld("Ismail")

	if result != "Hello Ismail" {
		t.Fatal("Result must be hello ismail")
	}

	fmt.Println("Eksekusi TestHellowWorldMail done")
}
