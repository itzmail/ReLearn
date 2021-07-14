//EVENT HANDLER
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
  p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');

function ubahWarnaP2() {
  p2.style.backgroundColor = 'lightgreen';
}

p2.onclick = ubahWarnaP2;

// cara diatas merupakan cara lama
// ada cara yang lebih simple

//addEventListener('nama event', perintahnya)
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  const ul = document.querySelector('section#b ul');
  const liBaru = document.createElement('li');
  const itemBaru = document.createTextNode('item baru');
  liBaru.appendChild(itemBaru);
  ul.appendChild(liBaru);
});
