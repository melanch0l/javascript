function one() {
    var sameVar; //undefined
}
function two() {
    var sameVar = false; //third step :hosited variable put in local variable enviroment
    one(); // invoked func one and new executed context is created on top of the fun two executed context
}
var sameVar = true; //first step :hosited variable and when run store as true
two(); //second step :invoked the fuction two and new executed context is created on top of the global context
//stacks
//two() => undefined
//one() => false //does not care about global only care about what inside of itself
//global() => true