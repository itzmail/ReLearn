void main() {
  countLoop(3);
}

void countLoop(int n) {
  for (int i = 1; i <= n; i++) {
    Future.delayed(Duration(seconds: 1), () => print(i));
  }
}
