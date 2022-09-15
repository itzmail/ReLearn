# A bit of NPM

jadi npm itu adalah sebuah perusahaan yang sudah diakuisisi oleh GitHub dan GitHub sendiri sudah diakuisisi olehMicrosoft

## What Is NPM?

* npm itu sendiri package manager untuk mengelola third_party_module khusus untuk nodejs
* third_party_module yang ada di NPM hanya untuk project open source, sedangkan untuk project yang private bersifat berbayar

## langkah membuat third_party_module sendiri

1. tuliskan npm init pada dir kalian
2. setelah selesai dang mengikuti semua langkah tersebut, sekarang, di dir kalian akan terdapat file bernama package.json

### package.json

* jika kalian perhatikan di property scripts => `npm [nama scriptnya]`.
* Untuk script diluar npm atau custom sendiri, untuk menjalankannya menggunakan  => `npm run [nama scriptnya]`

### Install third_party_module 

* untuk menginstall third_party_module dengan cara menuliskan `npm install [nama third_party_module]`
* Begitu kita install third_party_module :
  1. folder node_modules terbuat
  2. pada file package.jsonnya akan terdapat property dependencies
  3. terdapat file package_lock.json yang berguna sebagai penjelas dari third_party_module yang kita pakai

