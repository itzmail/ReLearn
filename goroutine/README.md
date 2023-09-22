## Concurrency dan Parallel Programming

### Intro

### Parallel Programming

- Saat ini kita hidup di era multicore
- Semakin cangginh perangkat kreas, maka software pun akan mengikuti, dimana sekarang kita bisa dengan mudah membuat proses parallel di aplikasi
- Parallel programming sederhananya adalah memecahkan suatu masalah dengan cara membaginya menjadi yang lebih kecil dan dijalankan secara bersamaan pada waktu yang berdamaan pula

### Contoh

- Menjalankan beberapa aplikasi sekaligus di OS kita
- Beberapa koki menyiapkan di restoran, dimana tiap koki membuat makanan masing-masing

### Process vs Thread

| Process | Thread |
| --- | --- |
| Process adalah sebuah eksekusi program | Thread adalah segmen dari process |
| Process mengkonsumsi memory besar | Thread menggunakan memory kecil |
| Process saling terisolasi dengan process lain | Thread bisa saling berhubungan jika dalam prcess yang sama |
| Process lama untuk dijalankan dihentikan | Thread cepat untuk dijalankan dan dihentikan |

### Concurency Programming

- Berbeda dengan paralel (menjalankan beberapa pekerjaan secara bersamaan), concurrency adalah menjalankan beberapa pekerjaan `secara bergantian`, waktunya tidak bersamaan
- Dalam parallel kita biasanya membutuhkan banyak Thread, sedangkan dalam concurrency, kita hanya membutuhkan sedikit Thread

# GOROUTINE

## Pengenalan Goroutine

- Goroutine adalah sebuah thread ringan yang dikelola oleh Go Runtime
- Ukuran Goroutine sangat kecil, sekitar 2kb, jauh lebih kecil dibandingkan Thread yang bisa sampai 1mb atau 1000Kb.
- Namun tidak seperti thread yang berjalan parallel, goroutine berjalan secara *concurrent*

### Cara Kerja Goroutine

- Sebenarnya, Goroutinde dijalankan oleh Go Scheduler dalam thread, dimana jumlah thread nya semabyak GOMAXPROCS (biasanya sejumlah core CPU)
- Jadi sebenarnya tidak bisa dibilang Goroutine itu pengganti Thread, karena Goroutine sendiri berjalan di atas Thread
- Namun yang mempermudah kita dalah, kita tidapk perlu melakukan manajemen thread, karena sudah di atur oleh Go Scheduler
    - G: Goroutine
    - M: Machine (thread)
    - P: Processor
- Intinya ngga usah bingun dengan Go Scheduler, sudah di setting otomatis. Yang perlu diperhatikan sekarang Go Routine

### Membuat Goroutine

- Kita hanya cukup menambahkan perintah `go` semeblum memanggil function yang akan kita jalankan dalma goroutine
- SEbuah function kita jalankan dalam goroutine, function tersebut akan mberjalan secara asnychronouse, artinya tidak akan ditunggu sampa fucntion tersebut selesai

## GOROUTINE SANGAT RINGAN!!

Jadi tidak masalah membuat lebih banyak GOROUTINE, tidak seperti bahasa yang menggunakan thread

```go
func DisplayNumber(number int) {
	fmt.Println("Number : ", number)
}

func TestManyGoroutine(t *testing.T) {
	for i := 0; i < 1000; i++ {
		go DisplayNumber(i)
	}

	time.Sleep(5 * time.Second)
}

```

kalau dilihat maka hasil tersebut tidak berurutan, karena berjalan secara asynchronous

- Belajar Channel

[CHANNEL](https://github.com/itzmail/MyEdu_Center/blob/golang/goroutine/CHANNEL_README.md)

### Race Condition

# **Masalah Dengan Goroutine**

- Saat kita menggunakan goroutine, dia tidak hanya berjalan secara concurrent, tapi bisa parallel juga, karena bisa ada beberapa thread yang berjalan secara parallel
- Hal ini sangat berbahaya ketika kita melakukan manipulasi data variable yang sama oleh beberapa goroutine secara bersamaan
- Hal ini bisa menyebabkan masalah yang namanya Race Condition

```go
func TestRaceCondition(t *testing.T) {
	x := 0
	for i := 1; i <= 1000; i++ {
		go func() {
			for j := 1; j <= 100; j++ {
				x = x + 1
			}
		}() 
	}

	time.Sleep(5 * time.Second)
	fmt.Println("Total X : ", x) // x disini akan berubah-ubah karena ada beberapa goroutine yang tidak dijalankan
}

// goroutine yang berjalan ada 1000, ternyata ada 2 goroutine berjalan secara pararel. jadi ketika melakukan counter nilianya sama
```

### sync.Mutex | ****Mutex (Mutual Exclusion)****

- Untuk mengatasi masalah race condition tersebut, di Go-Lang terdapat sebuah struct bernama sync.Mutex
- Mutex bisa digunakan untuk melakukan locking dan unlocking, dimana ketika kita melakukan locking terhadap mutex, maka tidak ada yang bisa melakukan locking lagi sampai kita melakukan unlock
- Dengan demikian, jika ada beberapa goroutine melakukan lock terhadap Mutex, maka hanya 1 goroutine yang diperbolehkan, setelah goroutine tersebut melakukan unlock, baru goroutine selanjutnya diperbolehkan melakukan lock lagi
- Ini sangat cocok sebagai solusi ketika ada masalah race condition yang sebelumnya kita hadapi

```go
func TestMutex(t *testing.T) {
	x := 0
	var mutex sync.Mutex

	for i := 1; i <= 1000; i++ {
		go func() {
			for j := 1; j <= 100; j++ {
				mutex.Lock()
				x = x + 1
				mutex.Unlock()
			}
		}()
	}

	time.Sleep(5 * time.Second)
	fmt.Println("Total X : ", x)
}
```

### ****RWMutex (Read Write Mutex)****

- Kadang ada kasus dimana kita ingin melakukan locking tidak hanya pada proses mengubah data, tapi juga membaca data
- Kita sebenarnya bisa menggunakan Mutex saja, namun masalahnya nanti akan rebutan antara proses membaca dan mengubah
- Di Go-Lang telah disediakan struct RWMutex (Read Write Mutex) untuk menangani hal ini, dimana Mutex jenis ini memiliki dua lock, lock untuk Read dan lock untuk Write

```go
type BankAccount struct {
	RWMutex sync.RWMutex
	Balance int
}

func (account *BankAccount) AddBalance(amount int) {
	account.RWMutex.Lock()
	account.Balance = account.Balance + amount
	account.RWMutex.Unlock()
}

func (account *BankAccount) GetBalance() int {
	account.RWMutex.RLock()
	balance := account.Balance
	account.RWMutex.RUnlock()

	return balance
}

func TestRWMutex(t *testing.T) {
	account := BankAccount{}

	for i := 0; i < 100; i++ {
		go func() {
			for j := 0; j < 100; j++ {
				account.AddBalance(1)
				fmt.Println(account.GetBalance())
			}
		}()
	}

	time.Sleep(5 * time.Second)

	fmt.Println("Total Balance", account.GetBalance())
}

// Kasus fungsi diatas terjadi bila ada strutch dan akan dijalankan oleh beberapa go routine
```

### Deadlock

- Hati-hati saat membuat aplikasi yang parallel atau concurrent, masalah yang sering kita hadapi adalah Deadlock
- Deadlock adalah keadaan dimana sebuah proses goroutine saling menunggu lock sehingga tidak ada satupun goroutine yang bisa jalan
- Sekarang kita coba simulasikan proses deadlock

```go
type UserBalance struct {
	sync.Mutex
	Name    string
	Balance int
}

func (user *UserBalance) Lock() {
	user.Mutex.Lock()
}

func (user *UserBalance) Unlock() {
	user.Mutex.Unlock()
}

func (user *UserBalance) Change(amount int) {
	user.Balance = user.Balance + amount
}

func Transfer(user1 *UserBalance, user2 *UserBalance, amount int) {
	user1.Lock()
	fmt.Println("Lock user1 ", user1.Name)
	user1.Change(-amount)

	time.Sleep(1 * time.Second)

	user2.Lock()
	fmt.Println("Lock user2 ", user2.Name)
	user2.Change(amount)

	time.Sleep(1 * time.Second)

	user1.Unlock()
	user2.Unlock()
}

func TestDeadLock(t *testing.T) {
	user1 := UserBalance{
		Name:    "Eko",
		Balance: 1000000,
	}

	user2 := UserBalance{
		Name:    "Budi",
		Balance: 1000000,
	}

	go Transfer(&user1, &user2, 100000)
	go Transfer(&user2, &user1, 200000)

	// terjadi deadlock karena Lock user 2 tidak dieksekusi karena kondisinya user1 kodenya belum selesai untuk diunlock

	time.Sleep(3 * time.Second)

	fmt.Println("User ", user1.Name, "| Balanace : ", user1.Balance)
	fmt.Println("User ", user2.Name, "| Balanace : ", user2.Balance)
}
```

### sync.WaitGroup

- WaitGroup adalah fitur yang bisa digunakan untuk menunggu sebuah proses selesai dilakukan
- Hal ini kadang diperlukan, misal kita ingin menjalankan beberapa proses menggunakan goroutine, tapi kita ingin semua proses selesai terlebih dahulu sebelum aplikasi kita selesai
- Kasus seperti ini bisa menggunakan WaitGroup
- Untuk menandai bahwa ada proses goroutine, kita bisa menggunakan method Add(int), setelah proses goroutine selesai, kita bisa gunakan method Done()
- Untuk menunggu semua proses selesai, kita bisa menggunakan method Wait()

```go
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
```

### sync.Once

- Once adalah fitur di Go-Lang yang bisa kita gunakan untuk memastikan bahsa sebuah function di eksekusi hanya sekali
- Jadi berapa banyak pun goroutine yang mengakses, bisa dipastikan bahwa goroutine yang pertama yang bisa mengeksekusi function nya
- Goroutine yang lain akan di hiraukan, artinya function tidak akan dieksekusi lagi

```go
import (
	"fmt"
	"sync"
	"testing"
)

var counter = 0

func OnlyOnce() {
	counter++
}

func TestOnce(t *testing.T) {
	once := sync.Once{}
	group := sync.WaitGroup{}

	for i := 0; i < 100; i++ {
		go func() {
			group.Add(1)
			once.Do(OnlyOnce)
			group.Done()
		}()
	}

	group.Wait()
	fmt.Println(counter) // output : 1
}
```

### sync.Pool

- Pool adalah implementasi design pattern bernama object pool pattern.
- Sederhananya, design pattern Pool ini digunakan untuk menyimpan data, selanjutnya untuk menggunakan datanya, kita bisa mengambil dari Pool, dan setelah selesai menggunakan datanya, kita bisa menyimpan kembali ke Pool nya
- Implementasi Pool di Go-Lang ini sudah aman dari problem race condition

```go
import (
	"fmt"
	"sync"
	"testing"
	"time"
)

func TestPool(t *testing.T) {
	pool := sync.Pool{
		New: func() interface{} {
			return "Kosong"
		},
	}

	pool.Put("Ismail")
	pool.Put(2)
	pool.Put(true)

	for i := 0; i < 10; i++ {
		go func() {
			data := pool.Get()
			fmt.Println(data)
			time.Sleep(1 * time.Second)
			pool.Put(data)
		}()
	}

	time.Sleep(11 * time.Second)
	fmt.Println("Selesai")
}
```