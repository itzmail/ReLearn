package restapi

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func FetchUsersDummy() (*UserResponse, error) {
	resp, err := http.Get("https://dummyjson.com/users")
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}

	// Unmarshal JSON ke dalam struktur Go
	var userResponse *UserResponse
	err = json.Unmarshal(body, &userResponse)
	if err != nil {
		fmt.Println("Error:", err)
		return nil, err
	}

	// Simpan data dalam variabel
	users := userResponse.Users

	// Cetak data untuk verifikasi
	for _, user := range users {
		fmt.Printf("ID: %d, Name: %s %s, Email: %s\n", user.ID, user.FirstName, user.LastName, user.Email)
	}

	return userResponse, nil
}
