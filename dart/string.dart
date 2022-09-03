void main() {
  String constString = "Ini variable Constant String";
  String name = " Ismail Nur Alam ";
  String animal = "Cat, Dog, Rabbit";

  print(constString);

  // Split
  print(animal.split(", "));

  // Substring => menampilkan sebagaian dari string itu
  print(constString.substring(0, 12));

  // Mengetahui panjang string
  print(constString.length);

  // Menghilankan spasi awal dan akhir
  // awal trimleft() || akhir trimRight()
  print(name.trim().length);

  // Mengambil value of ASCII
  print(name.codeUnitAt(1)); // huruf i => 73

  // Menampilkan index character
  print(name.indexOf("I"));

  // Mengecek string diawali atau diakhiri dengan ini atau engga?
  print(name.startsWith(" Ismail"));

  // Mengecek apakah kosong
  print("".isEmpty);
}
