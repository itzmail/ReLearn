void main() {
  RekeningBank rekeningBank = new RekeningBank(
      bankName: "Indonesian Bank",
      owner: "Ismail Tanpan Selalu",
      saldo: 1000000000000);

  rekeningBank.cekSaldo();
  rekeningBank.transfer();
  rekeningBank.ambilSaldo();

  RekeningBank rekeningIbu =
      new RekeningBank(bankName: "Nadin Bank", owner: "Ibu", saldo: 99999999);
  rekeningIbu.setSaldo = 90909090909; // Setter
  print(rekeningIbu.getSaldo); // Getter
}

class RekeningBank {
  // Attribute
  late String owner;
  late String bankName;
  late int saldo;

  // Constructor
  RekeningBank(
      {this.saldo = 0,
      this.owner = "noSetOwner",
      this.bankName = "noSetBankName"});

  // Getter and Setter
  set setSaldo(int newSaldo) {
    this.saldo = newSaldo;
  }

  int get getSaldo {
    return saldo;
  }

  set setOwner(String newOwner) {
    this.owner = newOwner;
  }

  String get getOwner {
    return owner;
  }

  set setBankName(String newBankName) {
    this.bankName = newBankName;
  }

  String get getBankName {
    return bankName;
  }

  // Methods
  cekSaldo() {
    print("Cek Saldo");
  }

  transfer() {
    print("Transfer running...");
  }

  ambilSaldo() {
    print("Ambil Saldo running...");
  }
}
