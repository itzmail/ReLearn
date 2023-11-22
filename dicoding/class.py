def my_decorator(func):
    def wrapper():
        print("Sebelum fungsi dieksekusi.")
        func()
        print("Setelah fungsi dieksekusi.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

class Mobil:
    # Constructor
    def __init__(self, warna, merek, kecepatan):
        self.warna = warna
        self.merek = merek
        self.kecepatan = kecepatan

    def tambah_kecepatan(self, kecepatan):
        self.kecepatan += kecepatan

    @staticmethod
    def intro_mobil():
        print("Ini adalah metode dari kelas Mobil")

# Catatan:
# Penamaan cls merupakan kesepakatan bersama dari programmer Python untuk memudahkan pembacaan kode. Anda dapat mengganti namanya, tidak harus cls.
    @classmethod
    def outro_mobil(cls):
        print("Ini diluar metode dari kelas Mobil")

mobil_1 = Mobil("Merah", "Toyota", 0)

# print("Info mobil")
# print("==========")
# print("Warna: ", mobil_1.warna)
# print("Merek: ", mobil_1.merek)
# print("Kecepatan: ", mobil_1.kecepatan)

# mobil_1.tambah_kecepatan()
# print("Setelah ditambahkan kecepatan: ", mobil_1.kecepatan)

mobil_1.intro_mobil()