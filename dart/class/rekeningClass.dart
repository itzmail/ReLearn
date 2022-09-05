void main() {
  RekeningBank rekeningBank = new RekeningBank(
      bankName: "Indonesian Bank",
      owner: "Ismail Tanpan Selalu",
      saldo: 1000000000000);

  rekeningBank.cekSaldo();
  rekeningBank.transfer();
  rekeningBank.ambilSaldo();
}

class RekeningBank {
  // Attribute
  late String owner;
  late String bankName;
  late int saldo;

  // Constructor
  RekeningBank(
      {this.saldo = 0,
      this.owner = "Ismail Nur Alam",
      this.bankName = "Swiss Bank"});

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
