void main() {
  AllCreatedByAllah sayWhat = new AllCreatedByAllah();

  sayWhat.methodAngel();
  sayWhat.methodHuman();
  sayWhat.methodJin();
  sayWhat.allMethodCreatur();
}

class Creature {
  void whoWasCreated() {
    print("Is Allah!!");
  }
}

mixin Human {
  void methodHuman() {
    print(
        "Human is perfect creature and it was created by soil, and he was place was to be wrong and forgot");
  }
}

mixin Jin {
  void methodJin() {
    print("Jin is the Human enemy and he always seduce human");
  }
}

mixin Angel {
  void methodAngel() {
    print('Angel is creature most obdien with Allah');
  }
}

class AllCreatedByAllah extends Creature with Human, Jin, Angel {
  void allMethodCreatur() {
    print("Which favors do you deny");
  }
}
