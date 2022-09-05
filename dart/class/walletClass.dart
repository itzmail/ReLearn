void main() {
  Wallet myWallet = new Wallet();

  myWallet.setOwner = "Ismail";
  myWallet.setSaldo = 999999999;

  // Transaksi
  myWallet.transfer(100000000);
  myWallet.request(1);

  print(myWallet.getOwner);
  print(myWallet.getSaldo);
  print(myWallet.getMutasi);
}

class Wallet {
  late String owner;
  late int saldo;
  late List mutasi = [];

  Wallet({this.owner = "noSetOwner", this.saldo = 0});

  String get getOwner {
    return owner;
  }

  int get getSaldo {
    return saldo;
  }

  List get getMutasi {
    return mutasi;
  }

  set setOwner(String newOwner) {
    this.owner = newOwner;
  }

  set setSaldo(int newSaldo) {
    this.saldo = newSaldo;
  }

  set setMutasi(String mutasiRecord) {
    this.mutasi.add(mutasiRecord);
  }

  transfer(int nominal) {
    int res = saldo -= nominal;
    addMutasi("Transaksi $res");
    this.saldo = res;
  }

  request(int nominal) {
    int res = saldo += nominal;
    addMutasi("Transaksi $res");
    this.saldo = res;
  }

  addMutasi(String record) {
    this.mutasi.add(record);
  }
}
