package goroutine

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func RunAsynchronous(group *sync.WaitGroup, noOrder int) {
	defer group.Done()

	group.Add(1)

	fmt.Println("Hello ke-", noOrder)
	time.Sleep(1 * time.Second)
}

func TestRunAsynchronous(t *testing.T) {
	group := &sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go RunAsynchronous(group, i)
	}

	group.Wait()
	fmt.Println("Completed")
}
