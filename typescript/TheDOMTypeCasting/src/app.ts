const anchor = document.querySelector('a')!;
/*Kita beri tanda seru di akhir atau sebelum titik koma
  agar ketika kita pakai variable tersebut typescript tidak membaca error, 
KARENA ada kemungkinan bahwa variable anchor terjadi error

* Dan tidak perlu buat kondisi seperti di bawah ini
if(anchor){
  console.log(anchor.href);
}
*/
console.log(anchor);

// const form = document.querySelector('form')!;
/* kita beri as seperti dibawah ini adalah salah satu aturan yang ada di Typescript
Dimana kita bisa mendeklarasikan hal yang kita pilih elemen atau element itu bersifat apa */
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber // kita set value ini bertipe number => Salah satu function dari typescript
  );
})
