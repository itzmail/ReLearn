void main() {
  Multiple realMultiple = new Multiple();
  Multiple verseMultiple = new Multiple.verse();

  print("${realMultiple.name}, ${realMultiple.age}");
  print("${verseMultiple.name}, ${verseMultiple.age}");
}

class Multiple {
  late String name;
  late int age;

  Multiple({this.name = "Real Multiple", this.age = 20});
  Multiple.verse({this.name = "Multiple Verse", this.age = 69});
}
