void main() {
  Mobil xpander = new Mobil(5);
  Motor huda = new Motor(2);

  huda.totalWheel(2);
  xpander.totalWheel(4);
}

abstract class Transportation {
  String soundHorn = "Telolet!";

  void horn() {
    print(soundHorn);
  }

  void totalWheel(int wheel) {
    print("Parent of totalWheel : $wheel");
  }
}

class Mobil extends Transportation {
  int roda;
  Mobil(this.roda);

  @override // untuk memodifikasi method yang ada di parent
  void totalWheel(int wheel) {
    print("Child of totalWheel Mobil: $wheel");

    super.totalWheel(wheel); // untuk tetap memanggil method yang ada di parent
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
}

class SuperMobil extends Mobil {
  late int roda;
  SuperMobil(this.roda) : super(roda);

  @override
  void totalWheel(int wheel) {
    print("Wheel of total Wheel SuperMobil : ");
  }
}
