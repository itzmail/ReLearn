## PENGENALAN CHANEL

- Channel adalah tempat komunikasi secara synchronous yang bisa dilakukan oleh goroutine
- Di Channel terdapat pengirim dan penerima, biasanya pengirim dan penerima adalah goroutine yang berbeda
- Saat melakukan pengiriman data ke Channel, goroutine akan ter-block, sampai ada yang menerima data tersebut
- Maka dari itu, channel disebut sebagai alat komunikasi synchronous (blocking)
- Channel cocok sekali sebagai alternatif seperti mekanisme async await yang terdapat di beberapa bahasa pemrograman lain

### Karakteristik Channel

- Secara default channel hanya bisa menampung satu data, jika kita ingin menambahkan data lagi, harus menunggu data yang ada di channel diambil
- Channel hanya bisa menerima satu jenis data
- Channel bisa diambil dari lebih dari satu goroutine
- Channel harus di close jika tidak digunakan atau bisa menyebabkan memory leak

### Membuat Channel

- Channel di Go-Lang direpresentasikan dengan tipe data `chan`
- Untuk membuat channel sangat mudah, kita bisa menggunakan `make()`, mirip ketika membuat map
- Namun saat pembuatan channel, kita harus tentukan tipe data apa yang bisa dimasukkan kedalam channel tersebut

```go
	channel := make(chan string)
```

### Mengirim dan Menerima Data dari Channel

- Seperti yang sudah dibahas sebelumnya, channel bisa digunakan untuk mengirim dan menerima data
- Untuk mengirim data, kita bisa gunakan kode : `channel <- data`
- Sedangkan untuk menerima data, bisa gunakan kode : `data <- channel`
- Jika selesai, jangan lupa untuk menutup channel menggunakan function `close()`

<aside>
💡 Jadi pastikan data yang dikirim itu ada datanya jangan sampai data yang menerima atau mengirim tidak ada. karena akan terjadi *deadlock*

</aside>

### Channel Sebagai Parameter

- Dalam kenyataan pembuatan aplikasi, seringnya kita akan mengirim channel ke function lain via parameter
- Sebelumnya kita tahu bahkan di Go-Lang by default, parameter adalah pass by value, artinya value akan diduplikasi lalu dikirim ke function parameter, sehingga jika kita ingin mengirim data asli, kita biasa gunakan pointer (agar pass by reference).
- Berbeda dengan Channel, kita tidak perlu melakukan hal tersebut

```go
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
```

### Channel In dan Out

- Saat kita mengirim channel sebagai parameter, isi function tersebut bisa mengirim dan menerima data dari channel tersebut
- Kadang kita ingin memberi tahu terhadap function, misal bahwa channel tersebut hanya digunakan untuk mengirim data, atau hanya dapat digunakan untuk menerima data
- Hal ini bisa kita lakukan di parameter dengan cara menandai apakah channel ini digunakan untuk in (mengirim data) atau out (menerima data)

```go
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
```

### Buffered Channel

- Seperti yang dijelaskan sebelumnya, bahwa secara default channel itu hanya bisa menerima 1 data
- Artinya jika kita menambah data ke-2, maka kita akan diminta menunggu sampai data ke-1 ada yang mengambil
- Kadang-kadang ada kasus dimana pengirim lebih cepat dibanding penerima, dalam hal ini jika kita menggunakan channel, maka otomatis pengirim akan ikut lambat juga
- Untuknya ada Buffered Channel, yaitu buffer yang bisa digunakan untuk menampung data antrian di Channel

### Buffered Capacity

- Kita bebas memasukkan berapa jumlah kapasitas antrian di dalam buffer
- Jika kita set misal 5, artinya kita bisa menerima 5 data di buffer.
- Jika kita mengirim data ke 6, maka kita diminta untuk menunggu sampai buffer ada yang kosong
- Ini cocok sekali ketika memang goroutine yang menerima data lebih lambat dari yang mengirim data

### Range Channel

- Kadang-kadang ada kasus sebuah channel dikirim data secara terus menerus oleh pengirim
- Dan kadang tidak jelas kapan channel tersebut akan berhenti menerima data
- Salah satu yang bisa kita lakukan adalah dengan menggunakan perulangan range ketika menerima data dari channel
- Ketika sebuah channel di close(), maka secara otomatis perulangan tersebut akan berhenti
- Ini lebih sederhana dari pada kita melakukan pengecekan channel secara manual

```go
func TestRangeChannel(t *testing.T) {
	channel := make(chan string)

	go func() {
		for i := 0; i < 10; i++ {
			channel <- "Perulangan ke -" + strconv.Itoa(i)
		}
		close(channel)
	}()

	for data := range channel {
		fmt.Println("Mengirim data", data)
	}
}
```

### Select Channel

- Kadang ada kasus dimana kita membuat beberapa channel, dan menjalankan beberapa goroutine
- Lalu kita ingin mendapatkan data dari semua channel tersebut
- Untuk melakukan hal tersebut, kita bisa menggunakan select channel di Go-Lang
- Dengan select channel, kita bisa memilih data tercepat dari beberapa channel, jika data datang secara bersamaan di beberapa channel, maka akan dipilih secara random

```go
func TestSelectChannel(t *testing.T) {
	var channel1 chan string = make(chan string)
	channel2 := make(chan string)
	defer close(channel1)
	defer close(channel2)

	go GiveMeResponse(channel1)
	go GiveMeResponse(channel2)

	// select {
	// case data := <-channel1:
	// 	fmt.Println("Data dari channel 1: ", data)
	// case data := <-channel2:
	// 	fmt.Println("Data dari channel 2: ", data)
	// } yang diambil hanya channel 1, karena konsepnya berurutan.
	// kalau posisi awal sudah dapat data, maka akan langsung break

	counter := 0
	for {
		select {
		case data := <-channel1:
			fmt.Println("Data dari channel 1: ", data)
			counter++
		case data := <-channel2:
			fmt.Println("Data dari channel 2: ", data)
			counter++
		}

		counter++

		if counter == 4 {
			break
		}
	}
}
```

### Default Select

- Apa yang terjadi jika kita melakukan select terhadap channel yang ternyata tidak ada datanya?
- Maka kita akan menunggu sampai data ada
- Kadang mungkin kita ingin melakukan sesuatu jika misal semua channel tidak ada datanya ketika kita melakukan select channel
- Dalam select, kita bisa menambahkan default, dimana ini akan dieksekusi jika memang di semua channel yang kita select tidak ada datanya

```go
func TestDefaultSelectChannel(t *testing.T) {
	var channel1 chan string = make(chan string)
	channel2 := make(chan string)
	defer close(channel1)
	defer close(channel2)

	go GiveMeResponse(channel1)
	go GiveMeResponse(channel2)

	counter := 0
	for {
		select {
		case data := <-channel1:
			fmt.Println("Data dari channel 1: ", data)
			counter++
		case data := <-channel2:
			fmt.Println("Data dari channel 2: ", data)
			counter++
		default:
			fmt.Println("Menunggu data")
		}

		if counter == 2 {
			break
		}
	}
}
```