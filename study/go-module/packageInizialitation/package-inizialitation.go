package main

import (
	// _ "import-package/database" // ini untuk penggunaan blank identifier, jadi hanya dijalankan func init() ("Jika ada")
	"fmt"
	"import-package/database"
)

func main() {
	result := database.GetDatabase()
	fmt.Println(result)
}
