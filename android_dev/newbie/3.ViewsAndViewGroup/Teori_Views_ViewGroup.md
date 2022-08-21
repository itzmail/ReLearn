# Teori Views and Group
Pada dasarnya semua elemen antar pengguna di aplikasi Android dibangun menggunakan dua buah komponen inti, yaitu view dan viewgroup.

Sebuah view adalah obyek yang menggambar komponen tampilan ke layar yang mana pengguna dapat melihat dan berinteraksi langsung.

Contoh komponen turunan dari view seperti :

* **TextView**, komponen yang berguna untuk menampilkan teks ke layar.

* **Button**, komponen yang membuat pengguna dapat berinteraksi dengan cara ditekan untuk melakukan sesuatu.

* **ImageView**, Komponen untuk menampilkan gambar.

* **RecyclerView**, komponen untuk menampilkan informasi dalam bentuk list.

* **GridView**, komponen untuk menampilkan informasi dalam bentuk grid.

* **RadioButton**, komponen yang memungkinkan pengguna dapat memilih satu pilihan dari berbagai pilihan yang disediakan.

* **Checkbox**, komponen yang memungkinkan pengguna dapat memilih lebih dari satu dari pilihan yang ada.

![ImgView](assets/View.png)

Sedangkan viewgroup adalah sebuah obyek yang mewadahi obyek-obyek view dan viewgroup itu sendiri sehingga membentuk satu kesatuan tampilan aplikasi yang utuh. Contoh komponen viewgroup adalah:

* **LinearLayout**
* **FrameLayout**
* **RelativeLayout**
* **TableLayout**

![ImgViewGroup](assets/ViewGroup.png)

Hierarki komponen view dan viewgroup dapat digambarkan dengan diagram berikut:

![HirearkiViewGrop](assets/HirarkiViewGroup.png)

Inforamsi lebih lanjut: 
* [User Interface Overview](https://developer.android.com/guide/topics/ui/overview.html)

Salah satu contoh dari tampilan dalam file layout xml untuk merepresentasikan kolaborasi view dan viewgroup seperti ini :

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:orientation="vertical" >
    <TextView android:id="@+id/text"
              android:layout_width="wrap_content"
              android:layout_height="wrap_content"
              android:text="I am a TextView" />
    <Button android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="I am a Button" />
</LinearLayout>
```

Obyek turunan viewgroup `LinearLayout` menjadi kontainer untuk obyek turunan view, button, dan textview. Beberapa komponen viewgroup seperti *linearlayout*, *relativelayout*, *framelayout*, dan *tablelayout* merupakan komponen yang paling banyak digunakan untuk menjadi *parent/root* dari komponen-komponen view.

Berikut adalah definisi singkat dan inti dari komponen-komponen di atas terhadap penempatan komponen view (child) di dalamnya:

### LinearLayout
Akan menempatkan komponen-komponen di dalamnya secara horizontal atau vertikal. Linearlayout memiliki atribut weight untuk masing-masing child view yang berguna untuk menentukan porsi ukuran view dalam sebuah  ruang (space) yang tersedia.

  `android:orientation=”vertical”`
  `android:orientation=”horizontal”`

source : [Linier Layout](https://developer.android.com/guide/topics/ui/layout/linear.html)

### RelativeLayout
Layout yang lebih fleksible daripada layout yang sudah disebutkan di atas. Hal ini dikarenakan posisi dari masing-masing komponen di dalamnya dapat mengacu secara relatif pada komponen yang lainnya dan juga dapat mengacu secara relatif ke batas layar.

source : [Relative Layout](https://developer.android.com/guide/topics/ui/layout/relative.html)

### FrameLayout
*Layout ini adalah layout yang paling sederhana.* Layout ini akan membuat komponen yang ada di dalamnya menjadi menumpuk atau saling menutupi satu dengan yang lainnya.

Komponen yang paling pertama pada layout ini akan menjadi alas bagi komponen-komponen di atasnya. Framelayout memiliki kemampuan untuk menjadi kontainer untuk fragment-fragment di dalam sebuah activity. Berikut ilustrasi penggunaan framelayout terhadap child view yang dimilikinya:

source : [Frame Layout](http://developer.android.com/reference/android/widget/FrameLayout.html)

### Table Layout
Susunan komponen di dalam tablelayout akan berada dalam baris dan kolom. Namun layout jenis ini tidak akan menampilkan garis pembatas untuk baris, kolom atau cell-nya.