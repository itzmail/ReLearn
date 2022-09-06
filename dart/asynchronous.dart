Future<void> main() async {
  print(await printData());
  print("Data telah selesai diproses");
}

Future<String> printData() async {
  try {
    var data = await fetchData();
    return 'data : $data';
  } catch (err) {
    return "error : $err";
  }
}

Future<String> fetchData() {
  return Future.delayed(
    Duration(seconds: 2),
    () => throw ("Data gagal diproses"),
  );
}
