## Dasar Power shell

Command yang pertama kali kita ketahui adalah command ls dan cd. 

#### Object
Ketika kita command ls maka ls yang ada di unix system berbeda dengan yang ada di windows.
Di windows kita menggunakan object untuk menampilkan ls

Properties
1. Name
2. Path
3. Extension

#### Pipeline
berguna untuk menambahkan command lainnya

```bash
ls | Format-list
// untuk membuat jadi bentuk object

ls | Format-Table
// untuk membuat format menjadi object ini bentuk defaultnya
```

#### Measure
berguna untuk menghitung berapa banyak dari perintah tersebut yang kita hitung misal `ls | Measure` => artinya berapa banya object yang kita dapat
