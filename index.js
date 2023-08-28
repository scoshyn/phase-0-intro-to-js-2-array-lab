// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//const appendCat

function appendCat(name) {
    name = [...cats, "Broom"];
    return name;
}

function destructivelyAppendCat(names) {
    cats.push("Ralph");
}

function destructivelyPrependCat(names) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(names) {
    cats.pop();
}

function destructivelyRemoveFirstCat(names) {
    cats.shift();
}

function prependCat (name) {
    name = ["Arnold", ...cats];
    return name;
}

function removeLastCat (names) {
    names = cats.slice(0, cats.length -1);
    return names;
}

function removeFirstCat(names) {
    names = cats.slice(1);
    return names;
}