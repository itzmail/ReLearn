import {formater} from '../interfaces/HasFormater';

export class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: formater, heading: string, pos: 'start' | 'end'){
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerHTML = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerHTML = item.format();
    li.append(p);

    if(pos === 'start'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}

/* 
  1. Buat sebuah list container (ul) di constructor
  2. Buat method render untuk merender li baru di container
*/