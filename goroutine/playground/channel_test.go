package goroutine

import (
	"fmt"
	"testing"
	"time"
)

func TestCreateChannel(t *testing.T) {
	channel := make(chan string)

	go func() {
		time.Sleep(2 * time.Second)
		channel <- "Ismail Nur Alam"
		fmt.Println("Selesai mengirim data ke channel")
	}()

	data := <-channel
	fmt.Println(data)
	close(channel)

	time.Sleep(5 * time.Second)
}

// funtion for getChanner from TestCreateChannelAsParameter
func GiveMeResponse(channel chan string) {
	time.Sleep(2 * time.Second)
	channel <- "Ismail Nur Alam"
}

func TestCreateChannelAsParameter(t *testing.T) {
	channel := make(chan string)

	go GiveMeResponse(channel)

	data := <-channel
	fmt.Println(data)
	close(channel)

	time.Sleep(5 * time.Second)
}

func ChanOnlyIn(channel chan<- string) {
	time.Sleep(2 * time.Second)
	channel <- "Ismail Nur Alam"
}

func ChanOnlyOut(channel <-chan string) {
	data := <-channel
	fmt.Println(data)
}

func TestInOutChannel(t *testing.T) {
	channel := make(chan string)
	defer close(channel)

	go ChanOnlyIn(channel)
	go ChanOnlyOut(channel)

	time.Sleep(4 * time.Second)
}

func TestBufferedChannel(t *testing.T) {
	channel := make(chan string, 5)
	defer close(channel)

	channel <- "Ismail"
	channel <- "Nur"

	// fmt.Println(cap(channel))
	// fmt.Println(len(channel))

	fmt.Println(<-channel)
	fmt.Println(<-channel)
}
