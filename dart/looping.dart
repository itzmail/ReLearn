void forLoop(
    {data = null,
    int start = 0,
    int maksLooping = 1,
    bool isIncrement = false}) {
  if (data != null) {
    for (int i = start; i <= maksLooping; isIncrement ? i++ : i--) {
      print("${i + 1}. ${data[i]}");
    }
  } else {
    for (int i = start; i <= maksLooping; isIncrement ? i++ : i--) {
      print(i);
    }
  }
}

void whileLoop(
    {int start = 0, int maksLoop = 1, data = null, bool isIncrement = true}) {
  int local = start;
  if (data != null) {
    while (local < maksLoop) {
      print("${local + 1}. ${data[local]}");
      isIncrement ? local++ : local--;
    }
  } else {
    while (local < maksLoop) {
      print(local);
      isIncrement ? local++ : local--;
    }
  }
}

void doWhileLoop(
    {int start = 0, int maksLoop = 1, data = null, bool isIncrement = true}) {
  int local = start;

  if (data != null) {
    do {
      print("${local + 1}. ${data[local]}");
      isIncrement ? local++ : local--;
    } while (local < maksLoop);
  } else {
    do {
      print(local);
      isIncrement ? local++ : local--;
    } while (local < maksLoop);
  }
}

void main() {
  print('Materi Looping');
  List<String> favFood = ["Fried Rice", "Meatballs", "Fried Chicken"];
  List<String> favDrink = ["Juice Orange", "Juice Manggo", "Milk Shake"];
  List<String> hobby = ["Badminton", "Swimming", "Reading", "Gaming"];

  print("For Loop");
  // Looping biasa
  forLoop(maksLooping: 10, isIncrement: true, start: 1);

  // Looping list
  forLoop(data: favFood, maksLooping: (favFood.length - 1), isIncrement: true);

  print("While Loop");
  // Whiling Biasa
  whileLoop(maksLoop: 10);

  // Whiling List
  whileLoop(
    data: favDrink,
    maksLoop: favDrink.length,
  );

  print("Do While Loop");
  // Do Whiling Biasa
  doWhileLoop(maksLoop: 10, start: 1);

  // Do Whiling List
  doWhileLoop(data: hobby, maksLoop: hobby.length);
}
