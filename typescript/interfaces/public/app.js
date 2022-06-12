"use strict";
const me = {
    name: "Ismail",
    age: 30,
    spend(time) {
        console.log(`I got ${time}`);
        return time;
    },
    speak(text) {
        console.log(text);
    },
};
const getPreson = (person) => {
    console.log(`Hello ${person.name}`);
};
getPreson(me);
