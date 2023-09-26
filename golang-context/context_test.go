package golangcontext

import (
	"context"
	"fmt"
	"runtime"
	"testing"
	"time"
)

func TestContext(t *testing.T) {
	backaground := context.Background()
	fmt.Println(backaground)

	todo := context.TODO()
	fmt.Print(todo)
}

func TestContextWithValue(t *testing.T) {
	contextA := context.Background()

	contextB := context.WithValue(contextA, "b", "B")
	contextC := context.WithValue(contextA, "c", "C")

	contextD := context.WithValue(contextB, "d", "D")
	contextE := context.WithValue(contextB, "e", "E")

	fmt.Println(contextA)
	fmt.Println(contextB)
	fmt.Println(contextC)
	fmt.Println(contextD)
	fmt.Println(contextE)

	// Get Value
	fmt.Println(contextD.Value("b")) // dapat dari context b itu sendiri
	fmt.Println(contextD.Value("c")) // tidak dapat karena beda parent

	// konsep ambil value di context itu mengambil ke atas bukan ke bawah
}

func CreateCounter(ctx context.Context) chan int {
	destination := make(chan int)

	go func() {
		defer close(destination)
		counter := 1
		for {
			select {
			case <-ctx.Done():
				return
			default:
				destination <- counter
				counter++
				time.Sleep(1 * time.Second) // simulasi delay
			}
		}
	}()

	return destination
}
func TestCounterWithCancel(t *testing.T) {
	fmt.Println("total before", runtime.NumGoroutine())

	/*destination := CreateCounter()
	for n := range destination {
		fmt.Println("Counter", n)
		if n == 10 {

			break
		}
	}*/
	// kalau kita jalankan kode diatas, maka output 'total after' tetap 3 bukan 2. inilah yang disebut goroutine leak

	parent := context.Background()
	ctx, cancel := context.WithCancel(parent)

	destination := CreateCounter(ctx)
	for n := range destination {
		fmt.Println("Counter -", n)
		if n == 10 {
			break
		}
	}
	cancel() // membatalkan context, function ini berjalan secara asynchronous

	time.Sleep(2 * time.Second)

	fmt.Println("total after", runtime.NumGoroutine())
}

func TestContextWithTimeout(t *testing.T) {
	fmt.Println("total before", runtime.NumGoroutine())

	parent := context.Background()
	ctx, cancel := context.WithTimeout(parent, 5*time.Second)

	defer cancel()

	destination := CreateCounter(ctx)
	for n := range destination {
		fmt.Println("Counter -", n)
	}

	fmt.Println("total after", runtime.NumGoroutine())
}

func TestContextWithDeadline(t *testing.T) {
	fmt.Println("total before", runtime.NumGoroutine())

	parent := context.Background()
	ctx, cancel := context.WithDeadline(parent, time.Now().Add(5*time.Second))

	defer cancel()

	destination := CreateCounter(ctx)
	for n := range destination {
		fmt.Println("Counter -", n)
	}

	fmt.Println("total after", runtime.NumGoroutine())
}
