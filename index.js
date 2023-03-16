// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
cats.pop();
}
function  destructivelyRemoveFirstCat(){
cats.shift();

}
function appendCat(){
    const copyofcats = [...cats.slice()];
    copyofcats.push("Broom");
     return copyofcats;

}

function prependCat(){
    const copyofcats = [...cats.slice()];
    copyofcats.unshift("Arnold");
     return copyofcats;
}

function removeLastCat(){
    const copyofcats = [...cats.slice()];
    copyofcats.pop();
     return copyofcats;
}
function removeFirstCat(){
    const copyofcats = [...cats.slice()];
    copyofcats.shift();
     return copyofcats;
}