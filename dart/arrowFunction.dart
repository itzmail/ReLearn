void main() {
  String name = "Ismail Nur Alam";
  int sisi = 10;

  void perkenalan(String nama) => print("Halo nama saya $nama");
  perkenalan(name);

  int volumeCube(int value) => (value * value * value);
  print(volumeCube(sisi));

  double nilaiPhi() => 3.14;
  print(nilaiPhi());
}
