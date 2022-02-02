/**
 * * Asyncronous Function
 * ialah sebuah function yang bekerja secara asyncronous (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang synchronous (standard)
 * keyword await akan berjalan bila ada keyword async sebelumnya
 */

/* function cobaPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('selesai');
    }, 5000);
  });
} */

// menggunakan catch dan then

/* const coba = cobaPromise();
coba.then((coba) => console.log(coba)); */

/* async function cobaAsync() {
  const coba = await cobaPromise();
  console.log(coba);
} */

// Buatlah dua kondisi ketika waktu sesuai dan tidak sesuai

function cobaPromise() {
  return new Promise((resolve, rejected) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('Hi Apa Kabar!');
      });
    } else {
      setTimeout(() => {
        rejected('Kelamaan Ah!!');
      });
    }
  });
}

// menggunakan catch dan then

/* const coba = cobaPromise();
coba.then((res) => console.log(res)).catch((res) => console.log(res)); */

// pakai cara async dan await

async function cobaAsync() {
  try {
    // untuk return ketika resolved!
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}
