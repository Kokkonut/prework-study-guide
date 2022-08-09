var topics = "HTML, CSS, Git, JavaScript";
console.log(topics);

// WTF is the (0)???
/*
if (0) {
    console.log(" i'm 0!")
} else if (null) {
    console.log("im null!")
}else if (true) {
    console.log("im true!!")
}
*/

/*
var topic = "CSS";

if (topic === 'HTML') {
    console.log("Let's study HTML!");
}else if (topic === 'CSS') {
    console.log("Let's study CSS!");
}else if (topic ==='Git') {
    console.log("Let's study Git!");
}else if (topic === 'JavaScript') {
    console.log("lets study JavaScript!")
} else {
    console.log("Please try again!");
}
*/


var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

console.log("FOR LOOP BELLOW")
//FOR LOOPS
//var x = 0; | var to keep track of how many times code executes and identifies which index of array to target
//x < shapes.length; | Boolean comparison to work out how many times to repeat | length=property=total items in array
//x++ | incrament var by 1 for each loop
for(var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
}

var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for(var y = 0; y < topics.length; y++) {
    console.log(topics[y]);
}
