function sayName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() { //printName function lexical environment is findName
            var c = 'c';
            console.log(a, b, c); // access to parent and global variable
            return 'min';
        }

    }
}
sayName()()();