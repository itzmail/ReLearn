String ifElse(double data) {
  print("If Check ${data}");
  if (data == 4.0) {
    return "A";
  } else if (data >= 2.0) {
    return "B";
  } else {
    return "Error";
  }
}

void switchCase(String data) {
  print("Switch Case $data");
  switch (data) {
    case "A":
      print("Bukan Manusia");
      break;
    case "B":
      print("Rata-rata dong sama lainnya");
      break;
    default:
      print("Ada error!");
  }
}

void main() {
  double IPK = 0;

  switchCase(ifElse(IPK));
}
