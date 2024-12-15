package main

import "errors"

var (
	ValidationError = errors.New("Validation Error")
	NotFoundError   = errors.New("Not Found Error")
)

func GetById(id string) error {
	if id == "" {
		return ValidationError
	}

	if id != "ismail" {
		return NotFoundError
	}

	return nil
}

func main() {
	err := GetById("ismailna")
	if err != nil {
		if errors.Is(err, ValidationError) {
			println("Validation Error")
		} else if errors.Is(err, NotFoundError) {
			println("Not Found Error")
		}
	}
}
