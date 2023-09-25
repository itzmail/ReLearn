package golangcontext

import (
	"context"
	"fmt"
	"testing"
)

func TestContext(t *testing.T) {
	backaground := context.Background()
	fmt.Println(backaground)

	todo := context.TODO()
	fmt.Print(todo)
}
