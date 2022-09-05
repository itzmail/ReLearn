void main() {
  String name = "Rifqi Seafood";
  int year = 2000;
  String owner = "Rifqi Eka Hardianto";
  String address = "Jl. Bhayangkara, Jakarta";
  int phone = 08123456654;
  bool isOpen = true;

  List<Map> listMakanan = [
    {'nama': 'Kepiting Rebus', 'harga': 40000},
    {'nama': 'Nasi Goreng', 'harga': 20000},
    {'nama': 'Udang Asam Manis', 'harga': 50000},
    {'nama': 'Sate Cumi', 'harga': 30000},
  ];

  List<Map> listMinum = [
    {'nama': "Es Jeruk", 'harga': 5000},
    {'nama': "Es Kelapa", 'harga': 10000},
    {'nama': "Es Teh", 'harga': 3000},
  ];

  Map restoran = {
    "Nama": name,
    "Tahun": year,
    "Pemilik": owner,
    "Alamat": address,
    "Telepon": phone,
    "StatusBuka": isOpen,
    "daftarMakanan": listMakanan,
    "daftarMinuman": listMinum,
  };

  print(restoran);
}
