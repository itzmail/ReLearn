void main() {
  List<String> member = ["Ismail", "Nur", "Alam"];
  List tools = [12, true, 1.3];

  // menampilkan element list
  print(member[0]);
  print(member.elementAt(0)); // sama seperti yang di atas

  // menambahkan element
  member.add("Ganteng");
  print(member);

  // Menambahkan list dengan list
  tools.addAll(member);
  print(tools);

  // Mengurutkan secarat urut
  member.sort();
  print(member);

  // Mengurutkan secara terbalik
  List<String> newMember = member.reversed.toList();
  print(newMember);

  // Menghapurs semua element pada List
  member.clear();
  print(member);
}
