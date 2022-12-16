## Properties vs Constant

- Saat kita membuat object, properties yang terdapat di class akan secara otomatis dibuat perobject, oleh karena itu untuk mengakses properties, ktia perlu menggunakan object, atau jika dari dalam object tersebut sendiri, kita perlu menggunakan kata kunci **"this"**

- Sedangkan berbeda dengan constant, constan di class tidak akan dibuat per object. Constant itu hidupnya di class, bukan di object , oleh karena itu untuk mengaksesnya kita perlu menggunakan **NamaClass::NAMA_CONSTANT**. selain itu kita bisa menggunakan keyword **self** sebagai pengganti Nama Class itu sendiri.

- Secara sederhana, properties akan dibuat satu per instance class (object), sedangkan constant dibuat satu per class
