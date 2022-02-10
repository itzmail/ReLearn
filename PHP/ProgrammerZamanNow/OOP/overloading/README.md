## Overloading

* Saat kita mengakses properties, maka secara otomatis properties akan diakses
* Namun jika ternyata properties tersebut tidak tersedia di objectnya, maka PHP tidak secara otomatis menjadikan itu error
* PHP akan melakukan fallback ke magic function
* Dengan demikian kita bisa membuat properties secara dinamis dengan memanfaatkan magic function tersebut
* Ada bebrapa magic function yang bida kita gunakan untuk properties overloading

| Magic function | Keterangan |
|----------------|------------|
|__set($name, $value) : void | Dieksekusi ketika mengubah properties yang tidak tersedia |
|__get($name) : mixed | Dieksekusi ketika mengakses properties yang tidak tersedia | 
|__isset($name) : bool | Deksekusi ketika mengecek isset() atau empty() properties yang tidak tersedia | 
__unset($name) : void | Dieksekusi ketika menggunakan unset() properties yang tidak tersedia |

# Function Overloading

* Saat kita mengakses function, maka secara otomatis function akan diakses
* Namun jika ternyata function tersebut tidak tersedia di objectnya, maka PHP tidak secara otomatis menjadikan itu error
* PHP akan melakukan fallback ke magic function
* Dengan demikian kita bisa membuat function secara dinamis dengan memanfaatkan magic function tersebut
* Ada bebrapa magic function yang bisa kita gunakan untuk function overloading

| Magic function | Keterangan |
|----------------|------------|
|__call($name, $arguments) : mixed | Dieksekusi ketika memanggil function yang tidak tersedia |
|static __callStatic($name, $arguments) : mixed | Dieksekusi ketika memanggil static function yang tida tersedia | 

### Jadi seolah-olah kita bisa membuat function secara dinamis