import 'dart:math';

void main() {
  // Keliling Persegi
  int aroundSquare(int panjang, int lebar) {
    int result = 2 * (panjang + lebar);

    return result;
  }

  double largeCircle(int jarijari) {
    var result = pi * jarijari;

    return result;
  }

  int volumeBalok(int panjang, int lebar, int tinggi) {
    int result = panjang * lebar * tinggi;

    return result;
  }

  print(aroundSquare(3, 2));

  print(largeCircle(7));

  print(volumeBalok(10, 10, 10));
}
