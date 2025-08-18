var weirdo = function haha() {
    console.log("hi");
    haha(); //stackoverflow but accessable from this execution context
}
weirdo();
//haha(); cannot access from global execution context cuz haha is define within it own execution context