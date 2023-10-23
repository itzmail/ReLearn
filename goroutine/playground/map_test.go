package goroutine

import (
	"fmt"
	"sync"
	"testing"
)

func AddToMap(data *sync.Map, key int, value any, group *sync.WaitGroup) {
	defer group.Done()

	group.Add(1)
	data.Store(key, value)
}

func TestMap(t *testing.T) {
	data := &sync.Map{}
	group := &sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go AddToMap(data, i, i%2 == 0, group)
	}

	group.Wait()

	data.Range(func(key, value interface{}) bool {
		fmt.Println(key, ":", value)
		return true
	})
}
