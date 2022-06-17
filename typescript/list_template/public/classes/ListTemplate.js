"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTemplate = void 0;
class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerHTML = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
exports.ListTemplate = ListTemplate;
/*
  1. Buat sebuah list container (ul) di constructor
  2. Buat method render untuk merender li baru di container
*/ 
