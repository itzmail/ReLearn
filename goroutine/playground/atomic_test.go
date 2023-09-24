package goroutine

import (
	"fmt"
	"sync"
	"sync/atomic"
	"testing"
)

func TestAtomic(t *testing.T) {
	var x int64 = 0
	group := sync.WaitGroup{}

	for i := 1; i <= 1000; i++ {
		go func() {
			group.Add(1)
			for j := 1; j <= 100; j++ {
				// x = x + 1
				atomic.AddInt64(&x, 1)
			}

			group.Done()
		}()
	}

	group.Wait()
	// time.Sleep(5 * time.Second)
	fmt.Println("Total X : ", x) // x disini akan berubah-ubah karena ada beberapa goroutine yang tidak dijalankan
}

// Atomic ini dipakai untuk kebutuhan data primitive
// Mutex atau RWMutex digunakan untuk kebutuhan data struct
