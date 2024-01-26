## Debugging dan Optimasi
Terdapat banyak cara dan best practice dalam memperbaiki CSS yang telah Anda tulis. Salah satu cara yang mudah dan cepat dilakukan adalah dengan menggunakan tools untuk otomatis mencari kesalahan pada penulisan.

### Mencari Kesalahan CSS
Salah satu cara yang paling cepat untuk memastikan bahwa CSS yang telah Anda tulis itu valid dan dapat berjalan adalah menggunakan berbagai tools online yang tersedia secara gratis. Pengecekan cukup dengan cara copy-paste kode CSS, upload berkas CSS, atau menulis alamat situs yang ingin diperiksa.

Berikut beberapa opsi gratis yang tersedia.

* [CSS Validator Online by codebeautify.org](https://codebeautify.org/cssvalidate)
* [CSS Validation Service by W3C](https://jigsaw.w3.org/css-validator/#validate_by_uri)
* [CSS Lint](http://csslint.net/)
 

### Kecilkan Ukuran CSS
Ukuran CSS sangat penting untuk dapat dihemat karena akan memengaruhi seberapa cepat situs Anda dapat dimuat pada browser. Cara untuk menghemat ukuran berkas CSS adalah dengan menghapus spasi atau karakter yang tidak diperlukan dari kode. Berikut adalah contoh spasi atau karakter yang dapat dihapus.

New line characters (Baris baru).
Whitespace characters (Spasi).
Block delimiters (Pembatas block).
CSS comments (Komentar CSS).
Perbaikan di atas dapat dilakukan secara manual, tetapi Anda juga dapat menggunakan tools online yang dapat memperbaiki secara otomatis. Inilah beberapa opsi yang tersedia.

* [CSSNANO Playground](http://cssnano.co/playground/)
* [CSS Minifier Tool and Compressor](https://cssminifier.com/)
* [Minify - JavaScript and CSS minifier](https://www.minifier.org/)

## **Rangkuman Pendalaman CSS**

Kita telah belajar banyak hal dalam modul Pendalaman CSS. Kami siapkan rangkuman materi terhadap hal yang telah Anda pelajari selama ini. Harapannya, Anda dapat mengingat kembali setiap materi yang disampaikan.

### **Selector Dasar**

Berikut adalah berbagai selector dasar yang telah dipelajari.

### **Type Selector**

Type Selector menggunakan nama elemen sebagai target untuk diterapkannya rule. Dalam kata lain, ketika menggunakan selector ini tentu rule akan diterapkan pada seluruh elemen target yang ada pada dokumen HTML.

### **Class Selector**

Class selector menetapkan target elemen berdasarkan nilai dari atribut **class** yang diterapkan pada elemennya. Untuk penulisan selector-nya diawali dengan tanda titik (.) dan dilanjutkan dengan nama class-nya.

### **ID Selector**

Class selector menetapkan target elemen berdasarkan nilai dari atribut **id** yang diterapkan pada elemennya. Untuk menetapkan selector dengan menggunakan id, kita gunakan tanda *octothorpe* (#) atau lebih familiar disebut dengan *hash*.

### **Attribute Selector**

Attribute selector merupakan cara menetapkan target elemen berdasarkan sebuah atribut yang digunakan atau bahkan bisa lebih spesifik dengan nilainya.

### **Universal Selector**

Universal selector digunakan untuk diterapkan pada seluruh elemen. Namun, selector ini juga bisa secara spesifik menargetkan sebuah elemen dengan menggabungkannya bersama selector yang lain.

### **Combinators**

Berikut adalah berbagai combinator yang telah dipelajari.

### **Adjacent Sibling Selector (+)**

Adjacent Sibling Selector menggabungkan dua buah basic selector dengan menggunakan tanda + di antara keduanya. Contohnya berikut.

`1. img + p {
2.   color: green;
3. }`

Adjacent Sibling Selector terdiri dari dua buah target elemen, tetapi hanya elemen kedua yang menerapkan rule selama elemen tersebut dituliskan langsung setelah elemen pertama pada berkas HTML. Selain itu, kedua elemen tersebut harus berada dalam induk elemen yang sama. Pada contoh di atas, rule akan diterapkan pada elemen paragraf yang berada tepat setelah elemen gambar.

### **General Sibling Selector (~)**

Mirip seperti Adjacent Sibling Selector, tetapi rules akan diterapkan pada seluruh elemen kedua yang berada setelah elemen pertama selama masih memiliki induk yang sama, walaupun posisi dari elemen kedua tidak berada tepat setelahnya. General Sibling Selector menggunakan simbol tilda (~) untuk menetapkan elemennya. Biasanya karakter ini berada di tombol kibor sebelah kiri tombol angka “1”.

### **Child Selector (>)**

Child Selector menggabungkan dua buah basic selector dengan menggunakan tanda *greater than* (>) di antara basic selectornya. Contohnya sebagai berikut.

`1. div > p {
2.   background-color: yellow;
3. }`

Sebagaimana contoh di atas, CSS rule akan diterapkan pada seluruh elemen paragraf yang berada dalam elemen <div> **secara langsung**. Dalam arti lain, elemen paragraf merupakan ***child*** dari elemen <div>, bukan hanya sebuah turunannya.

### **Descendant Selector (space)**

Descendant Selector mirip seperti child selector, tetapi hierarkinya lebih luas karena rule akan diterapkan pada seluruh elemen yang menjadi turunannya walaupun secara tidak langsung. Basic selector pertama yang dituliskan pada selector ini menjadi induknya dan basic selector yang kedua akan menerapkan rule. Selector ini menggunakan spasi dalam menggabungkan dua basic selector. Contohnya berikut.

`1. div p {
2.   background-color: yellow;
3. }`

Dalam contoh di atas, CSS rule akan diterapkan pada seluruh elemen paragraf yang merupakan turunan dari elemen <div>.

### **Pseudo Selector**

Berikut adalah macam-macam pseudo selector yang telah dipelajari.

### **Pseudo-class Selector**

Pseudo-class merupakan sebuah class “semu” yang sebenarnya ada pada tiap elemen HTML. Pada contoh sebelumnya, kita sudah mengetahui salah satu pseudo-class selector. Dengan menggunakan selector ini kita dapat memilih elemen berdasarkan class yang tidak tampak pada dokumen. Kita bisa menetapkan rule hanya ketika sebuah tautan telah dikunjungi (:visited) atau ketika sebuah elemen diarahkan dengan kursor (:hover).

Untuk menggunakan pseudo-class, kita gunakan tanda titik dua (:) pada basic selector dan diikuti dengan pseudo-class-nya.

### **Pseudo-elemen Selector**

Sama seperti pseudo-class, pseudo-element merupakan sebuah elemen “semu” yang sebenarnya ada, tetapi tidak tampak secara tertulis pada berkas HTML. Selector ini biasa digunakan ketika kita ingin menambahkan konten tepat sebelum dan setelah sebuah elemen paragraf. *Yup*, kita tidak perlu menuliskan elemen/konten baru pada berkas HTML untuk menambahkan konten. Namun, kita dapat memanfaatkan pseudo-element untuk melakukannya. Pseudo-element yang dimaksud adalah ::before dan ::after.

### **Font Styling**

Ketika kita membuat sebuah dokumen teks, termasuk dokumen cetak, langkah awal yang kita lakukan biasanya menentukan jenis font yang akan digunakan; pada pengembangan website pun demikian. Dalam CSS, font ditentukan menggunakan beberapa paket properti font yang dapat mengatur tipe font, ukuran, ketebalan, dan *style*. Berikut daftarnya.

- font-family: menetapkan jenis font yang akan diterapkan pada target.
- font-size: menentukan ukuran pada teks.
- font-weight: menentukan ketebalan pada teks.
- font-style: menetapkan styling yang diterapkan pada teks.
- font-variant: menentukan teks untuk menggunakan gaya *small caps* (huruf kapital kecil).
- font: sebagai *shorthand* dari properti font yang ada.

### **Text Styling**

Setelah mempelajari cara memanipulasi font, kita akan mempelajari cara melakukan formatting pada keseluruhan teks yang ada pada baris paragraf, seperti menetapkan indentasi, jarak antar baris, kata dan huruf, dan sebagainya. Berikut daftar dan penjelasannya.

- Line-height: mengatur jarak minimal dari garis dasar ke garis dasar dalam menampilkannya teks pada halaman.
- Text-indent: memberikan jarak/lekuk di awal paragraf.
- Text-align: mengatur perataan pada teks.
- Text-decoration: menetapkan dekorasi seperti underline (garis bawah), strikethrough (teks dicoret), dan overline (garis atas).
- Text-transform: mengubah kapitalisasi tanpa harus menuliskan kembali teksnya.
- Word and Letter Spacing: mengatur spasi atau jarak pada kata dan huruf.
- Text-shadow: membuat bayangan pada teks.

### **Menetapkan Nilai Warna**

Pada CSS, kita dapat menggunakan numeric value dan predefined color name untuk menetapkan nilai warna.

### **Numeric Value**

Penetapan warna menggunakan *numeric value* adalah cara yang paling banyak digunakan karena dengan menggunakannya, kita dapat menentukan warna yang diinginkan dengan tepat. Terlebih dengan bantuan *color picker*, kita tidak perlu repot-repot memahami dan mencari nilai kode warna secara manual.

Berikut adalah contoh penulisan nilai warna pada CSS dengan numeric value.

`1. /* Warna hijau menggunakan format RGB */
2. color: rgb(78,231,23);
3.  
4. /* Warna hijau Menggunakan format HEX */
5. color: #4ee717;
6.  
7. /* Warna hijau menggunakan format HSL (hanya di CSS3)*/
8. color: hsl(104, 82%, 50%);`

### **Predefined Color Name**

Selain menggunakan format angka, menentukan warna juga dapat menggunakan sebuah kata, seperti blue, yellow, red dan lainnya.

`1. color: black;
2. color: white;
3. color: blue;`

Dengan menggunakan kata tentu kita dapat lebih mudah dan cepat dalam menentukan warna, tetapi mungkin hanya warna dasar yang dapat kita hafal.

### **Warna untuk Teks dan Latar Belakang**

Kita sudah belajar dua cara menetapkan warna. Nah, kita perlu mengetahui obyek yang akan diwarnai untuk mengimplementasikan ilmu tersebut, bukan? Ada dua hal yang biasa dilakukan, yaitu teks dan background.

- **Text Color**Kita dapat dengan mudahnya mengganti warna teks menggunakan properti color. Nilai dari properti ini dapat berupa *predefined color name* atau *numeric value* dengan menggunakan RGB, RGBA, Hex, HSL, ataupun HSLA.
    
    
        `1. p { color: gray; }
        2. p { color: #666666; }
        3. p { color: #666; }
        4. p { color: rgb(102,102,102); }`
    
- **Background Color**CSS memperlakukan setiap elemen HTML seperti berada pada sebuah kotak dan properti **background-color**dapat mengatur warna untuk background dari kotak tersebut.
    
    
        `1. .box {
        2.   background-color: salmon;
        3. }`
    

### **Opacity**

Opacity adalah seberapa besar tingkat terlihat suatu objek. Semakin besar tingkat transparansi suatu objek, semakin tak terlihat objek tersebut. Namun, makin besar tingkat opacity suatu objek maka makin terlihat objek tersebut (solid).

`1. p {
2.   background-color: red;
3. }
4.  
5. p.opacity-50 {
6.   opacity: 50%;
7. }
8.  
9. p.opacity-100 {
10.   opacity: 100%;
11. }`

Hasilnya berikut.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:c39295bd10dea6904047a339a54f3bcd20230621113053.jpeg

### **Box Model**

Setiap elemen yang dibuat pada HTML akan menciptakan sebuah kotak untuk menampung kontennya. Layaknya bentuk kotak pada umumnya, ada beberapa nilai atau komponen padanya.

- Lebar dan tinggi pada kotak (konten).
- Ruang kosong antara konten dengan border (padding).
- Garis tepi (border).
- Jarak dari elemen lain (margin).

Pada CSS, kita dapat mengatur nilai-nilai tersebut. Inilah yang disebut dengan box model.

### **Apa itu Box Element**

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:1f4b7794e421dbef4fa88ea7a007a52320230621113053.jpeg

Sebagaimana yang kita lihat pada gambar di atas, setiap elemen pada HTML, baik *block-level* maupun inline-level, akan menghasilkan kotak elemen.

Berikut adalah penjelasan dari gambar di atas.

- Content: konten dari elemen itu sendiri.
- Padding: area yang menjadi jarak antara border elemen dengan konten yang ditampilkan.
- Border: garis yang mencakup konten beserta padding.
- Margin: area jarak di luar border.
- Edge of Element: batas dari suatu elemen.

### **Box Model**

Berikut adalah rangkuman materi yang telah dipelajari mengenai box model.

### **Dimension**

Secara standar, sebuah box yang dihasilkan tiap elemen selalu cukup untuk menampung konten. Namun, kita dapat mengatur nilai dimensi dari box tersebut dengan properti **width** dan **height**.

`1. .box {
2.   height: 300px;
3.   width: 300px;
4. }`

### **Limiting Dimension**

Beberapa website yang ada sekarang menampilkan layout yang dapat melebar dan menyempit mengikuti ukuran layar pengguna. Pada prinsip tampilan tersebut, mungkin kita memerlukan sebuah limitasi ukuran yang harus ditetapkan agar konten selalu ditampilkan secara proporsional. Untuk melakukannya, kita manfaatkan properti **min-width** dan **max-width**.

- **min-width**: menetapkan nilai lebar minimal yang harus dimiliki elemen.
- **max-width**: menetapkan nilai lebar maksimal yang harus dimiliki elemen.

`1. .content {
2.   max-width: 800px;
3.   height: 400px;
4. }`

### **Overflowing Content**

Dimensi box yang dihasilkan elemen selalu cukup untuk menampung konten tetapi hal ini tidak berlaku jika kita tetapkan secara manual panjang dan lebarnya. Tak jarang terjadi *overflow* ketika kita menerapkan ukuran pada elemen tetapi konten di dalamnya begitu banyak.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:6dc5ee73fc6566b2d6f776b2e289ad6b20230621113054.jpeg

### **Box-sizing**

Sebelum CSS3, ukuran lebar dan panjang elemen mengacu pada konten elemen (content-box). Itu berarti ukuran elemen seluruhnya merupakan nilai panjang (width) dan lebar (height) yang kita spesifikasikan ditambah dengan nilai padding dan border yang diterapkan pada elemen.

Dengan menggunakan properti box-sizing, kita dapat menentukannya berdasarkan border box, di mana ukuran elemen sudah termasuk content, padding dan border. Dengan metode ini, hasil elemen yang ditampilkan (termasuk padding dan border) akan memiliki dimensi yang sama persis seperti yang kita tentukan.

`1. .content {
2.   box-sizing: content-box;
3. }
4.  
5. .box {
6.   box-sizing: border-box;
7. }`

### **Border**

Border merupakan sebuah garis yang mengelilingi area konten dan padding (opsional). Kita bisa mengatur tipe, ketebalan, serta warna garis yang ditampilkan sesuai dengan yang kita inginkan. Kita juga bisa mengatur dalam menampilkan sebagian atau keseluruhan garis pada elemen.

`1. .box {
2.   border: 4px dashed #00a2c6;
3. }`

### **Padding**

Padding merupakan jarak antara area konten dan border. Padding banyak diterapkan pada elemen jika elemen tersebut menerapkan warna latar atau pun border. Padding memberikan sedikit ruang sehingga konten di dalam elemen dapat lebih nyaman untuk ditampilkan.

`1. p.example {
2.   padding: 10px;
3. }`

### **Margin**

Margin merupakan ruang atau jarak pada sebuah elemen. Namun, jarak tersebut terletak diluar dari konten dan border element. Margin digunakan untuk menjaga elemen agar tidak bertabrakan satu sama lain atau dari tepi jendela browser.

`1. margin: 10px 15px 20px 25px;`

### **Display Roles**

Standarnya, setiap elemen HTML memiliki dua tipe, yaitu block dan inline.

|  | Keterangan |
| --- | --- |
| Inline Element | • Elemen HTML yang secara default tidak menambahkan baris baru ketika dibuat.
• Nilai lebar dan tinggi elemen inline sebesar konten di dalamnya, dan tidak dapat diubah.
• Margin dan padding hanya mempengaruhi elemen secara horizontal, tidak vertikal. |
| Block Element | • Elemen HTML secara default menambahkan baris baru ketika dibuat.
• Jika tidak diatur lebarnya, lebar dari elemen block akan memenuhi lebar dari browser atau elemen yang menaunginya.
• Kita dapat mengatur dimensi dari elemen block.
• Di dalam elemen block, kita dapat menyimpan tag elemen HTML lainnya. |

Dengan menggunakan properti **display**, kita dapat mengubah sebuah elemen inline menjadi block, begitu pun sebaliknya. Properti ini juga dapat digunakan untuk menyembunyikan elemen yang ditampilkan.

### **Box Shadow**

Pada materi *formatting text*, kita sudah belajar cara menambahkan drop shadow pada teks. Pada CSS3, kita juga dapat menambahkan drop shadow di sekitar kotak elemen (tidak termasuk margin) dengan menggunakan properti box-shadow.

`1. .box {
2.   width: 200px;
3.   height: 200px;
4.  
5.   background-color: greenyellow;
6.  
7.   **box-shadow: 6px 6px 5px 10px #666666;**
8. }`

### **Rounded Corner**

CSS3 memperkenalkan kemampuan untuk membuat *rounded corner* atau sudut bundar pada box dengan menggunakan properti border-radius. Nilai dari properti ini merupakan tingkat lengkungan border dalam piksel.

`1. .rounded {
2.   width: 300px;
3.   padding: 20px;
4.   border: 4px solid deeppink;
5.  
6.   **border-radius: 10px;**
7. }`

### **Positioning**

Penggeseran elemen dengan properti-properti box model akan mempengaruhi keadaan dari elemen di sekitarnya. Untuk melakukan pemindahan elemen secara fleksibel dan bebas, kita perlu mengubah *positioning schema* dengan properti **position**. Berikut adalah nilai dari properti **position** yang ada pada CSS.

- **Normal Flow/Static Flow**Ia adalah *default behaviour* yang dimiliki elemen, yakni setiap elemen block akan ditampilkan dalam baris baru ketika dibuat. Jadi, setiap elemen block selalu muncul di bawah dari elemen block sebelumnya. Bahkan, jika masih terdapat ruang kosong pada samping elemennya, mereka tidak akan tampak bersebelahan.
- **Relative Positioning**Membuat elemen dapat melakukan perpindahan posisi ke atas, kanan, bawah, ataupun kiri dari posisi semula atau posisi seharusnya elemen tersebut berada. Perpindahan posisi ini tidak akan berpengaruh terhadap posisi elemen di sekitarnya karena ketika menggunakan relative positioning elemen tersebut akan dipindahkan dari *normal flow*.
- **Absolute Positioning**Sama seperti relative, elemen akan dipindahkan keluar dari normal flow sehingga kita dapat memindahkan posisi elemen ke atas, kanan, bawah, ataupun kiri secara leluasa tanpa mengganggu elemen di sekitarnya. Namun, posisinya relatif terhadap jendela browser dan posisinya dapat relatif pada induk elemen selama induk elemen juga berada di luar dari normal flow.
- **Fixed Positioning**Ia merupakan absolute position. Namun, posisinya selalu relatif pada jendela browser, bahkan ketika pengguna melakukan scrolling posisinya akan tetap tampak pada posisinya di layar.

### **Floating**

Secara sederhananya, properti float dapat membuat elemen berada pada sebelah kanan atau kiri. Bahkan, jika diterapkan pada elemen inline memungkinkan elemen di sekitarnya mengelilingi elemen tersebut (*wrap*).

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:463de0ba179d03b40ad0db0c73937e4020230621113054.jpeg

Selain dalam membuat text wrapping, float juga merupakan salah satu teknik dalam membuat layout website. Teknik ini masih banyak digunakan oleh developer karena sangat mudah dipahami dan tergolong mudah untuk *multiple column* seperti gambar berikut.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:512754ab8f8b73269d74686afd264ed820230621113055.jpeg

Hal ini dapat dilakukan dengan mudah menggunakan properti **float** karena nilai dari properti ini adalah **left** dan **right**. Nilai tersebut menunjukkan posisi elemen harus diletakkan.

### **Permasalahan Penerapan Float**

Properti float terlihat sangat mudah untuk digunakan, baik dalam *text wrapping* maupun dalam penyusunan layout. Namun, bukan berarti ia tidak memiliki efek samping atau masalah yang ditimbulkan ketika digunakan.

Masalah yang akan ditimbulkan adalah elemen induk akan memiliki tinggi sebesar **0px** jika ia hanya memiliki satu child-element (elemen anak) dengan properti **float**.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:e1615b736f6d8a6ef3a768bbd1f3fc9b20230621113053.jpeg

### **Clear Property**

Cara yang pertama adalah menggunakan properti **clear**. Properti clear memang dibuat untuk menghilangkan sifat float. Dengan demikian, elemen yang menerapkan properti float akan kembali “dianggap ada”. Namun, untuk menerapkan properti ini kita perlu membuat sebuah elemen kosong (biasanya menggunakan div tanpa konten) yang menerapkan properti clear.

Nilai dari properti **clear** merupakan nilai yang digunakan pada properti **float**. Sebab, properti clear akan menghapus sifat float sesuai dengan nilai yang ditetapkan.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:7a276ea58060ceb45890ec8a8917046420230621113054.jpeg

### **Teknik Overflow**

Cara kedua adalah dengan menetapkan properti **overflow: auto** pada elemen yang menampung elemen float. Sebagian developer lebih memilih menggunakan cara ini karena lebih praktis dan tidak perlu membuat elemen baru ketika menggunakannya.

Untuk menerapkannya sangatlah simpel, hanya tambahkan properti **overflow** dengan nilai **auto** pada container.

### **Konfigurasi Meta Tag Viewport untuk Responsibilitas Layout**

Tampilan website kita terlihat baik ketika dibuka menggunakan laptop atau desktop, tetapi belum tentu akan sama pada *mobile device*.

Pada browser Google Chrome dan Mozilla Firefox, ada fitur inspeksi elemen. Fitur ini sangat banyak dan bermanfaat bagi developer web dalam membantu mengembangkan website. Hal yang pasti, pada inspector tersebut, ada fitur yang dapat mensimulasikan halaman website dalam tampilan yang lebih kecil, seperti perangkat mobile atau tablet.

Tampilan pada simulasi device di browser Google Chrome akan tampak seperti berikut.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:0d60a24f79cfe384d157767ce5c5b86720230621113054.jpeg

Untuk mengatasi masalah di atas, kita perlu menetapkan meta tag viewport untuk mengendalikan dan menentukan bentuk dari viewport browser.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### **Specific Style dengan Media Query**

Walaupun sudah menetapkan meta tag, viewport tampilan pada *mobile device* belum baik. Hal ini karena informasi yang ditampilkan pada elemen <article> terlalu sempit, malahan informasi dalam elemen <aside> sulit terbaca.

!https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/academy/dos:99355d44f81903bdfb48078a0c7e400a20230621113054.jpeg

Untuk mengatasi masalah di atas, CSS menyediakan sebuah fitur untuk menentukan styling hanya pada kondisi browser dan device tertentu yang sesuai dengan aturan yang kita tetapkan. Contohnya, kita memerintahkan ke CSS bahwa “tolong terapkan kode styling ini jika ukuran viewport lebih lebar dari 480 piksel”. Fitur tersebut dinamakan CSS Media Query.
