void main() {
  Mobil xpander = new Mobil(5);
  Motor huda = new Motor(2);

  huda.totalWheel(2);
  xpander.totalWheel(4);

  huda.running();
  xpander.running();
}

// Abstract class tidak bisa diinisialisai. Harus di wariskan terlebih dahulu kalau mau akses abstract class
// Karena di abstract class terdapat method running maka anaknya perlu inisialisasi method tersebut
abstract class Transportation {
  String soundHorn = "Telolet!";

  void horn() {
    print(soundHorn);
  }

  void totalWheel(int wheel) {
    print("Parent of totalWheel : $wheel");
  }

  void running();
}

class Mobil extends Transportation {
  int roda;
  Mobil(this.roda);

  @override // untuk memodifikasi method yang ada di parent
  void totalWheel(int wheel) {
    print("Child of totalWheel Mobil: $wheel");

    super.totalWheel(wheel); // untuk tetap memanggil method yang ada di parent
  }

  @override
  void running() {
    print("Mobil Running");
  }
}

class Motor extends Transportation {
  late int roda;
  Motor(this.roda);

  @override // untuk memodifikasi method yang ada di parent
  void totalWheel(int wheel) {
    print("Child of totalWheel Motor: $wheel");

    super.totalWheel(wheel); // untuk tetap memanggila method yang ada di parent
  }

  @override
  void running() {
    print("Motor Running");
  }
}
