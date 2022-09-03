void main() {
  var mutableNum = 20;
  num immutableNum = 1.5;
  int intNum = 20;
  double doubleNum = 2.5;

  immutableNum = 30;

  print(mutableNum);
  print(immutableNum);
  print(intNum);
  print(doubleNum);

  // Mengubah ke string
  print(mutableNum.toString().runtimeType);

  // Bulatkan
  print(doubleNum.ceil());
  print(doubleNum.floor());
  print(doubleNum.round());

  // Mengubah menjadi double
  print(intNum.toDouble());

  // mengubah menjadi integer
  print(doubleNum.toInt());

  // Menampilkan banyakan angka di belakang koma
  print(doubleNum.toStringAsFixed(5));

  // Menampilkan banyak dari awal angka
  print(doubleNum.toStringAsPrecision(5));
}
