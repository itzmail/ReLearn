import unittest

class TestStringMethods(unittest.TestCase):
    # Ini adalah test case pertama (1)
    # 'c.mow' is interpreted as a set of characters to be removed, not as a sequence. The strip method will remove all instances of 'c', '.', 'm', 'o', and 'w'
    def test_strip(self):
        self.assertEqual('www.itsmail.com'.strip('c.mow'), 'itsmail')

    # Ini adalah test case kedua (2)
    def test_isalnum(self):
        self.assertTrue('c0d1ng'.isalnum())
        self.assertFalse('c0d!ng'.isalnum())

    # Ini adalah test case ketiga (3)
    def test_index(self):
        s = "Dicoding Indonesia"
        self.assertEqual(s.index("coding"), 2)
        # cek s.index error ketika tidak ditemukan
        with self.assertRaises(ValueError):
            s.index("decode")

if __name__ == '__main__':
    # begin the unittest.main()
    unittest.main()