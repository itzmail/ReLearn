void main() {
  // Map adalah sekumpulan data, sama seperti list, tetapi indexnya ditentukan oleh key
  Map<String, dynamic> mahasiswa = {
    "nama": "Ismail",
    "umur": 21,
    "nim": "M0123123"
  };

  print(mahasiswa);

  // Menampilkan value dengan key tertentu
  print(mahasiswa['nama']);

  // Menampilkan key aja
  print(mahasiswa.keys);

  // Menampilkan value aja
  print(mahasiswa.values);

  // Mengecek key tertentu
  print(mahasiswa.containsKey("umur"));

  // Mengecek value tertentu
  print(mahasiswa.containsValue("Ismail"));

  // Mengecek panjang data
  print(mahasiswa.length);

  // Menghapus data dengan key tertentu
  mahasiswa.remove("umur");
  print(mahasiswa);

  // Mengubah value data
  mahasiswa["nama"] = "Nur";
  print(mahasiswa);
}
