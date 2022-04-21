//Q1..

const parent = {

    name: "parent",
    age: 50,
    array: [],
    showName: function() {
        console.log(this.name);
    },
    Rname: function() {

        let keys = [];
        for (let key in this) {
            keys.push(key)
        };
        return keys;

    },
    sum: function() {

        return this.ar.reduce((acc, cur) => acc + cur, 0);
    }
}

const child = Object.create(parent);
child.ar = [1, 2, 3, 4, 5];
child.name = "child";
child.height = 5.7;

// 2.Prototype chaining.

const obj_1 = {
    name: "first obj",

    getName: function() { // 
        console.log(this.name);
    }
}

const obj_2 = Object.create(obj_1);
obj_2.name = "Vishal";

console.log(obj_2.getName());

obj_2.greet = function() {
    console.log("singh " + this.name);
};


const obj_3 = Object.create(obj_2);
obj_3.name = "vishalsingh";
console.log(obj_3.greet());
console.log(obj_3.getName());


// Calculate sum of all elements in Array in array's protype.
console.log(child.sum());


const grandchild = Object.create(child);
grandchild.name = "grand child";
grandchild.ar = [5, 5, 4, 5];
grandchild.hobby = "music";
console.log(grandchild.sum());




let gc = grandchild.Rname();
console.log(gc);